using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Library.Models.Home;
using Library.Services;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Site.Controllers
{
    public class HomeController : Controller
    {
        private readonly ISingularContentRepository<Introduction> _repository;

        public HomeController(ISingularContentRepository<Introduction> repository)
        {
            _repository = repository;
        }

        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Content()
        {
            return Json(_repository.Read());
        }
    }
}
