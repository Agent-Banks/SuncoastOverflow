using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;
        readonly protected string JWT_KEY;
        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public SessionsController(DatabaseContext context, IConfiguration config)
        {
            _context = context;
            JWT_KEY = config["JWT_KEY"];
        }
    }
}