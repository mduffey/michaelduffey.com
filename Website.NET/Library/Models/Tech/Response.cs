using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Models.Tech
{
    public class Response : SingularContent
    {
        public List<Technology> Technologies { get; set; }
    }
}
