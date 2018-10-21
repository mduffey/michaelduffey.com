using Library.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services
{
    // Content where there should always be exactly one entry (like the introduction on the home page), 
    // so you only get and update a single item (no creation, no reading a collection).
    public interface ISingularContentRepository<T> where T: SingularContent
    {
        T Read();
        void Update(T content);
    }
}
