namespace CWT.WEB.API.Data.Entities
{
    public class Topic : Entity
    {
        public string Title { get; private set; } = string.Empty;
        public List<TopicPoint> Points { get; private set; } = new List<TopicPoint>();
    }
}