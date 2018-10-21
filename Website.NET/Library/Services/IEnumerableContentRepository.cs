using Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services
{
    // Content with multiple entries (such as projects with the portfolio)
    // so you can add and delete items, and retrieve multiple items.
    // Note: ReadAll would not play well with a large number of items, but that's not a risk for this
    // website so I'm intentionally not dealing with that challenge. Pagination and searching would 
    // possibly limit the value of a single interface to represent the various repositories, depending 
    // on what fields you could search on.
    public interface IEnumerableContentRepository<T> where T: EnumerableContent
    {
        void Create(T item);
        void Update(T item);
        T Read(Guid identifier);
        List<T> ReadAll();
    }
}
