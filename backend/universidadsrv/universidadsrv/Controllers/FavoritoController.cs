using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using universidadsrv.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace universidadsrv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FavoritoController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FavoritoController(ApplicationDbContext context)
        {
            _context = context;
        }
        // GET: api/<FavoritoController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Favorito>>> GetFavoritos()
        {
            return await _context.Favoritos.ToListAsync();
        }

        // GET api/<FavoritoController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Favorito>> GetFavoritos(int id)
        {
            var favorito = await _context.Favoritos.FindAsync(id);
            if (favorito == null)
            {
                return NotFound();
            }
            return favorito;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutFavoritos(int id, Favorito favorito)
        {
            if (id != favorito.Id)
            {
                return BadRequest();
            }
            _context.Entry(favorito).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FavoritoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return CreatedAtAction("GetFavoritos", new { id = favorito.Id }, favorito); 
        }
        // POST api/<FavoritoController>
        [HttpPost]
        public async Task<ActionResult> PostFavoritos(Favorito favorito)
        {
            try
            {
                _context.Favoritos.Add(favorito);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetFavoritos", new { id = favorito.Id }, favorito);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message.ToString());
            }
        }

        // DELETE api/<FavoritoController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Favorito>> DeleteFavorito(int id)
        {
            var favorito = await _context.Favoritos.FindAsync(id);
            if (favorito == null)
            {
                return NotFound();
            }
            _context.Favoritos.Remove(favorito);
            await _context.SaveChangesAsync();
            return favorito;
        }

        private bool FavoritoExists(int id)
        {
            return _context.Favoritos.Any(e => e.Id == id);
        }
    }
}
