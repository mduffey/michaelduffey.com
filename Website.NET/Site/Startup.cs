using System;
using JavaScriptEngineSwitcher.ChakraCore;
using JavaScriptEngineSwitcher.Core;
using JavaScriptEngineSwitcher.Extensions.MsDependencyInjection;
using JavaScriptEngineSwitcher.Jint;
using JavaScriptEngineSwitcher.Vroom;
using Library.Models.Home;
using Library.Models.Portfolio;
using Library.Services;
using Library.Services.Fake;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using React.AspNet;

namespace Site
{
    public class Startup
    {
        // Updated per https://github.com/reactjs/React.NET/issues/433#issuecomment-325188857
        public IServiceProvider ConfigureServices(IServiceCollection services)
        {
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddSingleton<ISingularContentRepository<Introduction>, IntroductionRepository>();
            services.AddSingleton<IEnumerableContentRepository<Project>, ProjectRepository>();
            services.AddSingleton<ISingularContentRepository<Library.Models.Tech.Response>, TechRepository>();
            services.AddReact();
            services.AddMvc();
            return services.BuildServiceProvider();
        }
        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            var switcher = JsEngineSwitcher.Instance;
            switcher.DefaultEngineName = "Jint";
            switcher.EngineFactories
                .AddJint()
                .AddChakraCore()
                .AddVroom();
            // Initialise ReactJS.NET. Must be before static files.
            app.UseReact(config =>
            {
                //config
                //  .AddScript("~/js/site.jsx");

                // If you use an external build too (for example, Babel, Webpack,
                // Browserify or Gulp), you can improve performance by disabling
                // ReactJS.NET's version of Babel and loading the pre-transpiled
                // scripts. Example:
                //config
                //  .SetLoadBabel(false)
                //  .AddScriptWithoutTransform("~/Scripts/bundle.server.js");
            });
            app.UseStaticFiles();
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
