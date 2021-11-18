using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace back.Models {
    public class Categoria {

        [Key]
        public int CategoriaId { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Descricao { get; set; }

    }
}
