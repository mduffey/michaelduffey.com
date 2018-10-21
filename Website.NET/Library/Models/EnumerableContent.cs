using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Models
{
    public abstract class EnumerableContent : Content
    {
        public Guid Identifier { get; set; }
    }
}
