using Brewery.Store.Library.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace Brewery.Store.Library.Models
{
    public class Beer : IBeer
    {
        public string ModelId { get; set; }
    }
}
