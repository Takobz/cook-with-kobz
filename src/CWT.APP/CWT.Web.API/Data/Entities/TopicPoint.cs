namespace CWT.WEB.API.Data.Entities 
{
    public class TopicPoint : Entity 
    {
        public string TopicLine { get; private set; } = string.Empty;
        public List<Invitee> Contributors { get; private set; } = new List<Invitee>();
        //how do we see my contributions?
    }
}