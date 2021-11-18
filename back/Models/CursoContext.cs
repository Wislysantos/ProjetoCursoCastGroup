using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using back.Models;

namespace back.Models {
    public class CursoContext : DbContext{

        public CursoContext(DbContextOptions<CursoContext> options) : base(options) { }

        public DbSet<Curso> Cursos { get; set; }

        public DbSet<back.Models.Categoria> Categoria { get; set; }

        public DbSet<Log> Log { get; set; }

    }
}
