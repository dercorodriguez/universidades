using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace universidadsrv.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CargarArchvoController : ControllerBase
    {
        public class RetornoFoto
        {
            public string rutafoto { get; set; }
        }
        GenerarArchivo generarArchivo;
        /*
        private readonly GenerarArchivo generarArchivo;
        public CargarArchvoController(GenerarArchivo generarArchivo)
        {
            this.generarArchivo = generarArchivo;
        }
        */

        [HttpPost]
        public async Task<ActionResult<String>> PostCargarArchivos([FromForm] IFormFile archivo)
        {
            generarArchivo = new GenerarArchivo();
            string nombreArchivo = await generarArchivo.GrabarArchivo(archivo, "imagen");
            RetornoFoto retorno = new RetornoFoto();
            retorno.rutafoto = nombreArchivo;
            return retorno.rutafoto;
        }
    }
}
