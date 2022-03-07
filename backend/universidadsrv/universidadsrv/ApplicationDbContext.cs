using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using universidadsrv.Models;

namespace universidadsrv
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Universidades> Universidades { get; set; }
        public DbSet<Favorito> Favoritos { get; set; } 
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        
    }
}
