
namespace UFOWebApplication.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        //list of sightings belonging to this person (i dont think its written like this?)
        //public virtual List<SightingList> SightingList { get; set; }
        // public virtual List<Sighting> SightingList { get; set; }
    }   
}
