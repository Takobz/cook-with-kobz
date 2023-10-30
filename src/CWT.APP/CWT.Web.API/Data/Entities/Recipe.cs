namespace CWT.WEB.API.Data.Entities
{
    public class Recipe : Entity 
    {
        public string Name { get; private set; } = string.Empty;
        public string IngredientsData { get; private set; } = string.Empty;
        public string FoodUrl { get; private set; } = string.Empty;
        public string[] Ingredients 
        {
            get
            {
                return string.IsNullOrEmpty(IngredientsData) ?
                    Array.Empty<string>() : IngredientsData.Split(',');
            }
        }
    }
}