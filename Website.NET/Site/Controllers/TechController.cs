using Library.Models.Home;
using Library.Services;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Site.Controllers
{
    public class TechController : Controller
    {
        private readonly ISingularContentRepository<Library.Models.Tech.Response> _repository;

        public TechController(ISingularContentRepository<Library.Models.Tech.Response> repository)
        {
            _repository = repository;
        }

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
