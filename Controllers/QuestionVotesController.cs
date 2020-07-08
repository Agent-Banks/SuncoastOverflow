using System.Threading.Tasks;
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
        public async Task<IActionResult> PostQuestionVote(int id, string upOrDown)
        {
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

    }
}