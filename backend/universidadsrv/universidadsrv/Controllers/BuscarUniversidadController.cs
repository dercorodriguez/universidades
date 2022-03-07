using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using universidadsrv.Models;

namespace universidadsrv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BuscarUniversidadController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public BuscarUniversidadController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Universidades>> BuscarUniversidad(string keyvalues)
        {
            List<Universidades> univ = await _context.Universidades.ToListAsync();
            List<Universidades> listauniv = new List<Universidades>();

            Universidades ouniv; 
            foreach(Universidades ofila in univ)
            {
                if (keyvalues == ofila.country)
                {
                    ouniv = new Universidades();
                    ouniv.Id = ofila.Id;
                    ouniv.name = ofila.name;
                    ouniv.country = ofila.country;
                    ouniv.web_pages = ofila.web_pages;
                    ouniv.Status = ofila.Status;
                    listauniv.Add(ouniv);
                    ouniv = null;

                }
            }
            return listauniv;
            // return (IEnumerable<Universidades>)await _context.Universidades.FindAsync(keyValues);
        }


    }
}
