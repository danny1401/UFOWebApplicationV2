using UFOWebApplication.DAL;
using UFOWebApplication.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace UFOWebApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SightingController : ControllerBase
    {
        private InSightingRepository _db;

        private ILogger<SightingController> _log;

        public SightingController(InSightingRepository db, ILogger<SightingController> log)
        {
            _db = db;
            _log = log;
        }

        [HttpGet]
        public async Task<ActionResult> ReadAll()
        {
            List<Sighting> everySightings = await _db.ReadAll();
            return Ok(everySightings);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Sighting innSighting)
        {
            bool returOK = await _db.Create(innSighting);

            if (!returOK)
            {
                _log.LogInformation("The sighting could not be created.");
                return BadRequest("The sighting could not be saved.");
            }
            return Ok("The sighting is now created.");
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            bool returOK = await _db.Delete(id);
            if (!returOK)
            {
                _log.LogInformation("The sighting could not be deleted.");
                return NotFound("The sighting could not be deleted.");
            }
            return Ok("The sighting is now deleted.");
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> ReadOne(int id)
        {
            Sighting singleSighting = await _db.ReadOne(id);

            if (singleSighting == null)
            {
                _log.LogInformation("The sighting was not found.");
                return NotFound("The sighting was not found.");
            }
            return Ok(singleSighting);
        }

        [HttpPut]
        public async Task<ActionResult> Update(Sighting updateSighting)
        {
            bool returOK = await _db.Update(updateSighting);

            if (!returOK)
            {
                _log.LogInformation("The sighting could not be updated.");
                return NotFound("The sighting could not be updated.");
            }
            return Ok("The sighting is now changed.");
        }
    }
}
