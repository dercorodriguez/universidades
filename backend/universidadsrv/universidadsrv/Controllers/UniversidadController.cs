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
    public class UniversidadController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UniversidadController(ApplicationDbContext context)        
        {
            _context = context;
        }
        // GET: api/<UniversidadController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Universidades>>> GetUniversidad()
        {
            return await _context.Universidades.ToListAsync();
        }

        // GET api/<UniversidadController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Universidades>> GetUniversidad(int id)
        {
            var universidad = await _context.Universidades.FindAsync(id);
            if (universidad == null)
            {
                return NotFound();
            }
            return universidad;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> PutUniversidad(int id, Universidades universidad)
        {
            if (id != universidad.Id)
            {
                return BadRequest();
            }
            _context.Entry(universidad).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UniversidadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        // POST api/<UniversidadController>
        [HttpPost]
        public async Task<ActionResult> PostUniversidad(Universidades universidad)
        {
            _context.Universidades.Add(universidad);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUniversidad", new { id = universidad.Id }, universidad);
        }

        // DELETE api/<UniversidadController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Universidades>> DeleteUniversidad(int id)
        {
            var universidad = await _context.Universidades.FindAsync(id);
            if (universidad == null)
            {
                return NotFound();
            }
            _context.Universidades.Remove(universidad);
            await _context.SaveChangesAsync();
            return universidad;
        }

        private bool UniversidadExists(int id)
        {
            return _context.Universidades.Any(e => e.Id == id);
        }
    }
}
