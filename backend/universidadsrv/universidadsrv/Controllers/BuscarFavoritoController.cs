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
    public class BuscarFavoritoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public BuscarFavoritoController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Favorito>> BuscarFavoriro(string keyvalues)
        {
            List<Favorito> favor = await _context.Favoritos.ToListAsync();
            List<Favorito> listafavor = new List<Favorito>();

            Favorito ofavor;
            foreach (Favorito ofila in favor)
            {
                if (keyvalues == ofila.country)
                {
                    ofavor = new Favorito();
                    ofavor.Id = ofila.Id;
                    ofavor.name = ofila.name;
                    ofavor.country = ofila.country;
                    ofavor.web_pages = ofila.web_pages;
                    ofavor.Status = ofila.Status;
                    listafavor.Add(ofavor);
                    ofavor = null;
                }
            }
            return listafavor;
        }
    }
}
