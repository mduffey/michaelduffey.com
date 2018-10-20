using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Server.Kestrel.Core;
using Microsoft.AspNetCore.Server.Kestrel.Https;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;

namespace Site
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateWebHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args)
        {

            return WebHost.CreateDefaultBuilder(args)
                .UseKestrel(BuildOptions)
                .UseStartup<Startup>();
        }

        private static void BuildOptions(KestrelServerOptions options)
        {
            var certPath = Environment.GetEnvironmentVariable("WWWCERT");

            var certificate = !string.IsNullOrWhiteSpace(certPath)
                ? new X509Certificate2(certPath, Environment.GetEnvironmentVariable("WWWKEY"))
                : null;
            var environment = (IHostingEnvironment)options.ApplicationServices.GetService(typeof(IHostingEnvironment));
            if (environment.IsDevelopment())
            {
                options.Listen(IPAddress.Loopback, 5000);
                options.Listen(IPAddress.Loopback, 5001, listenOptions =>
                {
                    listenOptions.UseHttps();
                });
            }
            else
            {
                options.Listen(IPAddress.Any, 80);
                options.Listen(IPAddress.Any, 443, listenOptions =>
                {
                    listenOptions.UseHttps(certificate);
                });
            }
        }
    }
}
