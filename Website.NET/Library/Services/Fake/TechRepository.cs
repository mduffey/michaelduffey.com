using Library.Models.Tech;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services.Fake
{
    public class TechRepository : ISingularContentRepository<Models.Tech.Response>
    {
        public Models.Tech.Response Read()
        {
            return new Models.Tech.Response
            {
                Title = ".NET and Linux, together at last.",
                Technologies = new List<Technology>
                {
                    new Technology { Name = "GitHub (link goes to the site's repository!)", Url = "https://github.com/mduffey/michaelduffey.com" },
                    new Technology { Name = "Digital Ocean", Url = "https://m.do.co/c/2123fbb86a39" },
                    new Technology { Name = "Ubuntu 18.04", Url = "https://www.ubuntu.com/" },
                    new Technology { Name = "ASP.NET Core 2.1", Url = "https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-2.1" },
                    new Technology { Name = "React", Url = "https://reactjs.org/" },
                    new Technology { Name = "ReactJS.NET", Url="https://reactjs.net/" },
                    new Technology { Name= "Bootstrap 4.1", Url="https://getbootstrap.com/" },
                },
                Description = string.Join(Environment.NewLine,
                    "You can see the technologies above, but I thought I'd collect my thoughts here. Simply put, I'm impressed. Microsoft has done great work in getting .NET Core easily accessible and usable on a Linux box. Starting up my first demo version of the site on the server took no more effort than it did to get an instance of Node up and running, and anyone who's used Node knows how laughably easy that is.",
                    "One surprise for me was how ASP.NET Core has recently made certificate management clear and simple, something that worried me the first time I started experimenting with OWIN and the like in place of IIS. IIS has its flaws, no doubt, but one thing that was always very simple and clear was certificate management, and now ASP.NET Core can say the same. It took surprisingly little effort to set up the site for HTTPS.",
                    "In short, this all came together really well. I'm spending a *lot* more time transitioning from my old approach of jQuery manipulation of the DOM to a client-side MVC than I've had to spend standing up a .NET Core project with HTTPS and get it running on Ubuntu. That's kind of mindblowing!")
            };
        }

        public void Update(Models.Tech.Response content)
        {
            throw new NotImplementedException();
        }
    }
}
