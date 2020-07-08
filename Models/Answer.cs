using System;

namespace SuncoastOverflow.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Body { get; set; }
        public DateTime CreatedAt { get; private set; } = DateTime.Now;
        public int QuestionId { get; set; }
    }
}