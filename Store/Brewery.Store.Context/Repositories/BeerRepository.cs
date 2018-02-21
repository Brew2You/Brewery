using Brewery.Store.Library.Interfaces;
using Brewery.Store.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
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
            _context.Beer.Add(beer);
        }

        public void Delete(Beer beer)
        {
            _context.Beer.Remove(beer);
        }

        public List<Beer> GetAll()
        {
            return _context.Beer.ToList();
        }

        public Beer GetById(int id)
        {
            return _context.Beer.Find(id);
        }

        public void Update(Beer beer)
        {
            _context.Beer.Update(beer);
        }
    }
}
