using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models {
    public class Curso {

        [Key]
        public int CursoID { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string NomeCurso { get; set; }

        [Required]
        [Column(TypeName = "int")]
        public int QtdAlunos { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DtInicio { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DtTermino { get; set; }

        [Required]
        [Column(TypeName ="nvarchar(200)")]
        public string Descricao { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Categoria { get; set; }


    }
}
