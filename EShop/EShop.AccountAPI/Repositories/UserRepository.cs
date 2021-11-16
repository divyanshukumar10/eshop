using EShop.AccountAPI.Entities;
using EShop.AccountAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.AccountAPI.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly MyShowDBContext db = new MyShowDBContext();
        public void Register(User user)
        {
            db.Users.Add(user);
            db.SaveChanges();
        }

        public User Validate(Login login)
        {
            User user = db.Users.SingleOrDefault(u => u.Email == login.Email && u.Password == login.Password);
            return user;
        }
    }
}
