using Brewery.Store.Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Brewery.Store.Library.Interfaces
{
    public interface IRepository<T>
    {
        List<T> GetAll();
        T GetById(int id);
        void Create(T t);
        void Update(T t);
        void Delete(T t);
    }
}
