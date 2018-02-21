using Brewery.Store.Library.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Brewery.Store.Context
{
    public class BrewDBC : DbContext
    {
        public BrewDBC(DbContextOptions options) : base(options)
        { }

        public DbSet<Beer> Beer { get; set; }
    }
}
