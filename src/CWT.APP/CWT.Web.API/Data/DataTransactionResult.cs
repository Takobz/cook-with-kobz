using CWT.WEB.API.Data.Entities;

namespace CWT.WEB.API.Data 
{
    public class DataTransactionResult<T> where T : Entity 
    {
        public ResultType ResultType { get; private set; }
        public string ErrorMessage { get; private set; } = string.Empty;
        public T Result { get; private set; } 
        public bool IsEmptyResult 
        {
            get => Result == null || typeof(T) == typeof(EmptyEntity);
        }

        public static DataTransactionResult<T> CreateTransactionResult(
            T result,
            string errorMessage,
            ResultType resultType)
        {
            return new DataTransactionResult<T>
            {
                Result = result,
                ErrorMessage = errorMessage,
                ResultType = resultType
            };
        }
    }

    public enum ResultType
    {
        Success,
        Failed,
        InvalidData
    }

    //Create a builder for extending this...
}