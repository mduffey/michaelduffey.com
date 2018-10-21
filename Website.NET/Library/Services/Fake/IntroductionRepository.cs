using Library.Models.Home;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services.Fake
{
    public class IntroductionRepository : ISingularContentRepository<Introduction>
    {
        public Introduction Read()
        {
            return new Introduction
            {
                Title = "Thanks for visiting!",
                Description = string.Join(Environment.NewLine,
                    "You're here to see my work, which you can find in the tabs above. But first, a quick introduction:",
                    "I'm a web developer who has been in the profession, full-time, for the last ten years. I've worked as a lead developer on a few projects, architected most of the green-field solutions that I've worked on, and have experience working in both small and large teams, delivering both small and large solutions for a variety of problems within a variety of industries.",
                    "The majority of my experience is in .NET and the ecosystem/technologies surrounding it, so I can better speak to those skills, but I've done professional work in Delphi, PHP and Python, and have personal project experience in Node, Python, PHP and C (Arduino).",
                    "I have a particular love for crafting both data models and front end systems; to me, the core of what we do in this profession is deliver good data in a presentable and usable way; everything else is there to connect the former to the latter. I enjoy working on the systems in-between, of course, but I believe the single most thing we can get right are those two.",
                    "If you'd like to contact me because you have a question or want to discuss an opportunity, please do! You can find a contact form, along with a link to my resume, on {{link:Contact}}.")
            };
        }

        public void Update(Introduction item)
        {
            throw new NotImplementedException();
        }
    }
}
