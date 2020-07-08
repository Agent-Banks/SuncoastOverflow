using System.ComponentModel.DataAnnotations;

namespace SuncoastOverflow.Models
{
    public class Question
    {
        public int Id { get; set; }

        [Required]
        public string Title { get; set; }

        [Required]
        public string Body { get; set; }
        public string Tags { get; set; }
    }
}