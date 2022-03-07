using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;

namespace universidadsrv
{
    public class GenerarArchivo
    {
        /*
        private readonly IWebHostEnvironment env;
        public GenerarArchivo(IWebHostEnvironment env)
        {
            this.env = env;
        }
        */

        public async Task<String> GrabarArchivo(IFormFile archivo, string carpeta) 
        {
            // var nombreFile = $"{Guid.NewGuid()}{Path.GetExtension(archivo.FileName)}";
            var nombreFile = $"{archivo.FileName}";
            //string carpetafile = Path.Combine(env.WebRootPath, carpeta);

            string sruta = @"C:\publicacion\genuniver\uploadfile";
            string carpetafile = Path.Combine(sruta, carpeta);

            if (!Directory.Exists(carpetafile))
            {
                Directory.CreateDirectory(carpetafile);
            }

            string pathruta = Path.Combine(carpetafile, nombreFile);
            using (FileStream fileStream = File.Create(pathruta))
            {
                await archivo.OpenReadStream().CopyToAsync(fileStream);
            }
            return @"http://localhost:4230/uploadfile/imagen/" + archivo.FileName.ToString();
        }
    }
}
