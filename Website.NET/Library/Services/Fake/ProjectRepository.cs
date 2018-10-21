using Library.Models.Portfolio;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.Services.Fake
{
    public class ProjectRepository : IEnumerableContentRepository<Project>
    {
        public void Create(Project item)
        {
            throw new NotImplementedException();
        }

        public Project Read(Guid identifier)
        {
            throw new NotImplementedException();
        }

        public List<Project> ReadAll()
        {
            return new List<Project>();
        }

        public void Update(Project item)
        {
            throw new NotImplementedException();
        }
    }
}
