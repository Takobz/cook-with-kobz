namespace CWT.WEB.API.Data.Entities
{
    public class Recipe : Entity 
    {
        public string Name { get; private set; } = string.Empty;
        public string FoodUrl { get; private set; } = string.Empty;
        public List<string> Ingredients { get; private set; } = new List<string>();
    }
}