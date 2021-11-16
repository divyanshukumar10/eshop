using Eshop.Customer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.Customer.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly MyShowDBContext db = new MyShowDBContext();
        public Item Search(string itemName)
        {
            return db.Items.SingleOrDefault(i => i.ItemName == itemName);
        }
    }
}
