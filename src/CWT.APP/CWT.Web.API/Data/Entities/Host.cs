namespace CWT.WEB.API.Data.Entities
{
    public class Host : Entity
    {
        public string Name { get; private set; }  = string.Empty;
        public string ImageUrl { get; private set; } = string.Empty;   
    }
}