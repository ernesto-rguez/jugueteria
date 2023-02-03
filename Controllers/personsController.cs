using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using jugueteria.Models;
using Microsoft.EntityFrameworkCore;

namespace jugueteria.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class personsController : ControllerBase
    {
        private readonly ContactosContext _dbcontext;

        public personsController(ContactosContext context)
        {
            _dbcontext = context;
        }
        [HttpGet]
        [Route("ObtenerPersona")]
        public async Task< IActionResult> ObtenerPersona()
        {
            List<Person> lista = await _dbcontext.Persons.OrderByDescending(c => c.Nombre).ToListAsync();

            return StatusCode(StatusCodes.Status200OK, lista);
        }

        [HttpPost]
        [Route("Guardar")]
        public async Task<IActionResult> Guardar([FromBody] Person request)
        {
          await   _dbcontext.Persons.AddAsync(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpPut]
        [Route("Editar")]
        public async Task<IActionResult> Editar([FromBody] Person request)
        {
             _dbcontext.Persons.Update(request);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

        [HttpDelete]
        [Route("Eliminar/{id:int}")]
        public async Task<IActionResult> Eliminar(int id)
        {
            Person contacto = _dbcontext.Persons.Find(id);
            _dbcontext.Persons.Remove(contacto);
            await _dbcontext.SaveChangesAsync();
            return StatusCode(StatusCodes.Status200OK, "Ok");
        }

    }
}
