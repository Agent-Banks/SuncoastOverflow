using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{
    // All of these routes will be at the base URL:     /api/Answers
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case AnswersController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class AnswersController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public AnswersController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Answers
        //
        // Returns a list of all your Answers
        //
        // [HttpGet]
        // public async Task<ActionResult<IEnumerable<Answer>>> GetAnswers()
        // {
        //     // Uses the database context in `_context` to request all of the Answers and
        //     // return them as a JSON array.
        //     return await _context.Answers.ToListAsync();
        // }

        // GET: api/Answers/5
        //
        // Fetches and returns a specific answer by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // [HttpGet("{id}")]
        // public async Task<ActionResult<Answer>> GetAnswer(int id)
        // {
        //     // Find the answer in the database using `FindAsync` to look it up by id
        //     var answer = await _context.Answers.FindAsync(id);

        //     // If we didn't find anything, we receive a `null` in return
        //     if (answer == null)
        //     {
        //         // Return a `404` response to the client indicating we could not find a answer with this id
        //         return NotFound();
        //     }

        //     //  Return the answer as a JSON object.
        //     return answer;
        // }

        // PUT: api/Answers/5
        //
        // Update an individual answer with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Answer
        // variable named answer. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Answer POCO class. This represents the
        // new values for the record.
        //
        // [HttpPut("{id}")]
        // public async Task<IActionResult> PutAnswer(int id, Answer answer)
        // {
        //     // If the ID in the URL does not match the ID in the supplied request body, return a bad request
        //     if (id != answer.Id)
        //     {
        //         return BadRequest();
        //     }

        //     // Tell the database to consider everything in answer to be _updated_ values. When
        //     // the save happens the database will _replace_ the values in the database with the ones from answer
        //     _context.Entry(answer).State = EntityState.Modified;

        //     try
        //     {
        //         // Try to save these changes.
        //         await _context.SaveChangesAsync();
        //     }
        //     catch (DbUpdateConcurrencyException)
        //     {
        //         // Ooops, looks like there was an error, so check to see if the record we were
        //         // updating no longer exists.
        //         if (!AnswerExists(id))
        //         {
        //             // If the record we tried to update was already deleted by someone else,
        //             // return a `404` not found
        //             return NotFound();
        //         }
        //         else
        //         {
        //             // Otherwise throw the error back, which will cause the request to fail
        //             // and generate an error to the client.
        //             throw;
        //         }
        //     }

        //     // return NoContent to indicate the update was done. Alternatively you can use the
        //     // following to send back a copy of the updated data.
        //     //
        //     // return Ok(answer)
        //     //
        //     return NoContent();
        // }

        // POST: api/Answers
        //
        // Creates a new answer in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Answer
        // variable named answer. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Answer POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Answer>> PostAnswer(Answer answer)
        {
            // Indicate to the database context we want to add this new record
            _context.Answers.Add(answer);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetAnswer", new { id = answer.Id }, answer);
        }

        // DELETE: api/Answers/5
        //
        // Deletes an individual answer with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // [HttpDelete("{id}")]
        // public async Task<IActionResult> DeleteAnswer(int id)
        // {
        //     // Find this answer by looking for the specific id
        //     var answer = await _context.Answers.FindAsync(id);
        //     if (answer == null)
        //     {
        //         // There wasn't a answer with that id so return a `404` not found
        //         return NotFound();
        //     }

        //     // Tell the database we want to remove this record
        //     _context.Answers.Remove(answer);

        //     // Tell the database to perform the deletion
        //     await _context.SaveChangesAsync();

        //     // return NoContent to indicate the update was done. Alternatively you can use the
        //     // following to send back a copy of the deleted data.
        //     //
        //     // return Ok(answer)
        //     //
        //     return NoContent();
        // }

        // Private helper method that looks up an existing answer by the supplied id
        // private bool AnswerExists(int id)
        // {
        //     return _context.Answers.Any(answer => answer.Id == id);
        // }
    }
}
