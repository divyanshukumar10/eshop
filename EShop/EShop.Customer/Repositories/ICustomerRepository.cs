using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Eshop.Customer.Entities;
namespace EShop.Customer.Repositories
{
    public interface ICustomerRepository
    {
        Item Search(string itemName);
    }
}
