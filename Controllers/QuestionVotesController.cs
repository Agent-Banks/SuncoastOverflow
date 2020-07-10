using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionVotesController : ControllerBase
    {
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public QuestionVotesController(DatabaseContext context)
        {
            _context = context;
        }


        [HttpPost("{id}/{upOrDown}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {
            // If there is already an existing vote, return a bad request
            var existingVote = await _context.QuestionVotes.AnyAsync(questionVote => questionVote.UserId == GetCurrentUserId() && questionVote.QuestionId == id);
            if (existingVote)
            {
                return BadRequest();
            }

            // Add the restaurant vote to the table
            var questionVote = new QuestionVote
            {
                QuestionId = id,
                UserId = GetCurrentUserId(),
                UpOrDown = upOrDown
            };
            await _context.QuestionVotes.AddAsync(questionVote);

            var question = await _context.Questions.FindAsync(id);

            if (question == null)
            {

                return NotFound();
            }

            switch (upOrDown)
            {
                case "upvote":
                    question.IncreaseUpvoteCount();
                    break;
                case "downvote":
                    question.IncreaseDownvoteCount();
                    break;
                default:
                    return BadRequest();
            }

            _context.Entry(question).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Private helper method to get the JWT claim related to the user ID
        private int GetCurrentUserId()
        {
            // Get the User Id from the claim and then parse it as an integer.
            return int.Parse(User.Claims.FirstOrDefault(claim => claim.Type == "Id").Value);
        }

    }
}