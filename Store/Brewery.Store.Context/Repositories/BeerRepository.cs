using Brewery.Store.Library.Interfaces;
using Brewery.Store.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Brewery.Store.Context.Repositories
{
    public class BeerRepository : IRepository<Beer>
    {
        private BrewDBC _context;

        public BeerRepository(BrewDBC context)
        {
            _context = context;
        }

        public void Create(Beer beer)
        {
            _context.Add(beer);
        }

        public void Delete(Beer beer)
        {
            throw new NotImplementedException();
        }

        public List<Beer> GetAll()
        {
            throw new NotImplementedException();
        }

        public Beer GetById()
        {
            throw new NotImplementedException();
        }

        public void Update(Beer beer)
        {
            throw new NotImplementedException();
        }
    }
}
