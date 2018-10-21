using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Models.Portfolio
{
    public class Project : EnumerableContent
    {
        public string ImagePath { get; set; }
        public Organization Organization { get; set; }
        public List<string> Technologies { get; set; }
    }
}