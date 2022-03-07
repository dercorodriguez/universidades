using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace universidadsrv.Models
{
    public class Favorito
    {
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string name { get; set; }

        [Required]
        [Column(TypeName = "varchar(16)")]
        public string country { get; set; }

        [Required]
        [Column(TypeName = "varchar(100)")]
        public string web_pages { get; set; }

        [Required]
        [Column(TypeName = "varchar(200)")]
        public string image { get; set; }

        [Column(TypeName = "varchar(400)")]
        public string imagelocal { get; set; }

        [Required]
        [Column(TypeName = "varchar(1)")]
        public string Status { get; set; }
    }
}
