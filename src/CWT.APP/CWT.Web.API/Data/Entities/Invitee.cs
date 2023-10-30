namespace CWT.WEB.API.Data.Entities
{
    public class Invitee : Entity 
    {
        public string Name { get; private set; } = string.Empty;
        public string ImageUrl { get; private set; } = string.Empty;
        public string MiniDescription { get; private set; } = string.Empty;
    }
}