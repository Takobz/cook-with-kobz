namespace CWT.WEB.API.Data.Entities 
{
    public class TopicPoint : Entity 
    {
        public string TopicLine { get; set; } = string.Empty;
        public List<Invitee> Contributors { get; set; } = new List<Invitee>();
        //how do we see my contributions?
    }
}