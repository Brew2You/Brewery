using System;
using System.Collections.Generic;
using System.Text;

namespace Brewery.Store.Library.Interfaces
{
    public interface IRepository<T>
    {
        List<T> GetAll();
        T GetById();
        void Create();
        void Update();
        void Delete();
    }
}
