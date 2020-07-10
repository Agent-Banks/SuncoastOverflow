namespace SuncoastOverflow.Models
{
    public class QuestionVote
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public int QuestionId { get; set; }
        public string UpOrDown { get; set; }
    }
}