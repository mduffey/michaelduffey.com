using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Library.Models.Portfolio;
using Library.Services;
using Microsoft.AspNetCore.Mvc;

namespace Site.Controllers
{
    public class PortfolioController : Controller
    {
        private IEnumerableContentRepository<Project> _projectRepository;

        public PortfolioController(IEnumerableContentRepository<Project> projectRepository)
        {
            _projectRepository = projectRepository;
        }

        public IActionResult Index()
        {
            return Json(_projectRepository.ReadAll());
        }
    }
}