using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Brewery.Store.Service.Controllers
{
    [Produces("application/json")]
    [Route("api/Beer")]
    public class BeerController : Controller
    {
        // GET: api/Beer
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "Brew2You", "IsHereBitches" };
        }

        // GET: api/Beer/5
        [HttpGet("{id}", Name = "Get")]
        public string Get(int id)
        {
            return "value";
        }
        
        // POST: api/Beer
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }
        
        // PUT: api/Beer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }
        
        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
