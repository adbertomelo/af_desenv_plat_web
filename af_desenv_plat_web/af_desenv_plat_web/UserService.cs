using MongoDB.Driver;
using backend.Models;
using Microsoft.Extensions.Options;

namespace backend
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

        public async Task<User?> GetByLoginAsync(string email) =>
            await _userCollection.Find(x => x.Email == email).FirstOrDefaultAsync();

        public User? GetByLogin(string? email) =>
            _userCollection.Find(x => x.Email == email).FirstOrDefault();


    }
}
