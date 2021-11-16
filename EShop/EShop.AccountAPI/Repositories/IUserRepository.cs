using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.AccountAPI.Entities;
using EShop.AccountAPI.Models;
namespace EShop.AccountAPI.Repositories
{
    interface IUserRepository
    {
        void Register(User user);
        User Validate(Login login);
    }
}
