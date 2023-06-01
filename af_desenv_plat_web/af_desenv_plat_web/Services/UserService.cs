using MongoDB.Driver;
using backend.Models;
using Microsoft.Extensions.Options;
using System.Text.RegularExpressions;

namespace backend.Services
{
    public class UserService
    {

        private readonly IMongoCollection<User> _userCollection;

        public UserService(IOptions<DatabaseSettings> databaseSettings)
        {
            var mongoClient = new MongoClient(
                databaseSettings.Value.ConnectionString);

            var mongoDatabase = mongoClient.GetDatabase(
                databaseSettings.Value.DatabaseName);

            _userCollection = mongoDatabase.GetCollection<User>(
                databaseSettings.Value.UsersCollectionName);
        }

        public async Task<List<User>> GetAsync() =>
            await _userCollection.Find(_ => true).ToListAsync();

        public async Task<User?> GetAsync(string id) =>
            await _userCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task<User?> GetByLoginAsync(string? email) =>
            await _userCollection.Find(x => x.Email == email).FirstOrDefaultAsync();

        public User? GetByLogin(string? email) =>
            _userCollection.Find(x => x.Email == email).FirstOrDefault();

        public async Task CreateAsync(User newUser)
        {
            ValidateUser(newUser);

            User? user = await GetByLoginAsync(newUser.Email);

            if (user != null)
            {
                throw new Exception("Esse email já existe.");
            }

            await _userCollection.InsertOneAsync(newUser);
        }

        //public void Create(User newUser)
        //{
        //     ValidateUser(newUser);

        //    _userCollection.InsertOne(newUser);
        //}

        private static void ValidateUser(User newUser)
        {

            ValidateEmail(newUser.Email);
            ValidateName(newUser.Name);
            ValidatePassword(newUser.Password);

        }


        private static void ValidateName(string? name)
        {
            if (name == null || name.Trim() == "")
                throw new Exception("Informe o nome");
        }

        private static void ValidatePassword(string? password)
        {
            if (password == null || password.Trim() == "")
                throw new Exception("Informe uma senha");

        }

        private static void ValidateEmail(string? email)
        {
            if (email == null)
                throw new Exception("Digite um email");

            string pattern = @"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

            // Create a Regex object with the pattern
            Regex regex = new(pattern);

            // Match the email against the pattern
            Match match = regex.Match(email);

            // Return true if the email is valid, false otherwise
            if (!match.Success)
            {
                throw new Exception("Digite um email válido");
            }
        }

        private bool IsSameUser(User user, User updUser)
        {
            return user.Id == updUser.Id;
        }
        public async Task UpdateAsync(User updatedUser)
        {
            ValidateUser(updatedUser);

            User? user = await GetByLoginAsync(updatedUser.Email);

            if (user != null)
            {
                if (!IsSameUser(user, updatedUser))
                {
                    throw new Exception("O email informado já existe.");
                }

            }


            await _userCollection.ReplaceOneAsync(x => x.Id == updatedUser.Id, updatedUser);
        }
        public async Task RemoveAsync(string id) =>
            await _userCollection.DeleteOneAsync(x => x.Id == id);
    }

}
