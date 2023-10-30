namespace CWT.WEB.API.Data.Entities
{
    public class Invite : Entity
    {
        public Host Host { get; private set; } = new();
        public List<Invitee> Guests { get; private set;} = new List<Invitee>();
        public List<Recipe> Recipes { get; private set;} = new List<Recipe>();
    }
}