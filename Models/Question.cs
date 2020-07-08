using System.ComponentModel.DataAnnotations;
using System;

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

        public DateTime CreatedAt { get; private set; } = DateTime.Now;

        public int UpvoteCount { get; private set; } = 0;
        public void IncreaseUpvoteCount()
        {
            this.UpvoteCount++;
        }


        public int DownvoteCount { get; private set; } = 0;
        public void IncreaseDownvoteCount()
        {
            this.DownvoteCount++;
        }
    }
}