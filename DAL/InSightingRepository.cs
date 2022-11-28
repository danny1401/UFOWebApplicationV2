using System.Collections.Generic;
using System.Threading.Tasks;
using UFOWebApplication.Model;

namespace UFOWebApplication.DAL
{
    public interface InSightingRepository
    {
        // Sightings
        Task<bool> Create(Sighting innSighting);
        Task<List<Sighting>> ReadAll();
        Task<List<Sighting>> ReadIdDesc();
        Task<List<Sighting>> ReadCountryAsc();
        Task<List<Sighting>> ReadCountryDesc();
        Task<List<Sighting>> ReadCityAsc();
        Task<List<Sighting>> ReadCityDesc();
        Task<Sighting> ReadLatest();
        Task<bool> Delete(int id);
        Task<Sighting> ReadOne(int id);
        Task<bool> Update(Sighting updateSighting);
    }
}
