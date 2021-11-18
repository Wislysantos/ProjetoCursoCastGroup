using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace back.Models
{
    public class Log
    {
         [Key]
        public int LogID { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DataInclucao { get; set; }

        [Required]
        [Column(TypeName = "date")]
        public DateTime DataAtualicao { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string Operacao { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(30)")]
        public string nomeCurso { get; set; }
    }
}