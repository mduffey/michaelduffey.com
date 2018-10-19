using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Site.Controllers
{
    public class HomeController : Controller
    {
        public HomeController()
        {
            
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
