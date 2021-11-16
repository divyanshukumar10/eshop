using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EShop.Customer.Repositories;
using Eshop.Customer.Entities;
namespace EShop.Customer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly CustomerRepository repository = new CustomerRepository();
        [HttpGet]
        [Route("Seach/{itemName}")]
        public IActionResult SeachItem(string itemName)
        {
            Item item = repository.Search(itemName);
            return Ok(item);
        }
    }
}
