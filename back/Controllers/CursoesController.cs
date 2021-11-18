using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using back.Models;

namespace back.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CursoesController : ControllerBase
    {
        private readonly CursoContext _context;

        public CursoesController(CursoContext context)
        {
            _context = context;
        }

        // GET: api/Cursoes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Curso>>> GetCursos()
        {
            return await _context.Cursos.ToListAsync();
        }

        // GET: api/Cursoes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Curso>> GetCurso(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);

            if (curso == null)
            {
                return NotFound();
            }

            return curso;
        }

        // PUT: api/Cursoes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCurso(int id, Curso curso)
        {
            if (id != curso.CursoID)
            {
                return BadRequest();
            }

            _context.Entry(curso).State = EntityState.Modified;

            try
            {
                Log log = new Log {                   
                    DataAtualicao = DateTime.Now,
                    Operacao = "Editado",
                    nomeCurso = curso.NomeCurso,
                };
                _context.Log.Add(log);
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CursoExists(id))
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

        // POST: api/Cursoes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Curso>> PostCurso(Curso curso)
        {
            _context.Cursos.Add(curso);

            Log log = new Log {
                DataInclucao = DateTime.Now,
                DataAtualicao = DateTime.Now,
                Operacao = "Cadastrado",
                nomeCurso = curso.NomeCurso,                
            };
            _context.Log.Add(log);
            
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCurso", new { id = curso.CursoID }, curso);


        }

        // DELETE: api/Cursoes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCurso(int id)
        {
            var curso = await _context.Cursos.FindAsync(id);
            if (curso == null)
            {
                return NotFound();
            }

            _context.Cursos.Remove(curso);

            Log log = new Log {
                DataInclucao = DateTime.Now,
                DataAtualicao = DateTime.Now,
                Operacao = "Deletado",
                nomeCurso = curso.NomeCurso
            };
            _context.Log.Add(log);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CursoExists(int id)
        {
            return _context.Cursos.Any(e => e.CursoID == id);
        }

        [HttpGet("/pesquisar/{nomeCurso}")]
        public async Task<ActionResult<IEnumerable<Curso>>> Pesquisar(String nomeCurso) {
            var teste = _context.Cursos.Where(m => EF.Functions.Like(m.NomeCurso, "%" + nomeCurso + "%")).ToList();
            return teste;
        }
    }
}
