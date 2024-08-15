class StarWarsApi {
    constructor () {
        this.baseUrl = "https://swapi.dev/api/";
    };
    async getPlanets(planetnumber) {
        try{
            const planet = await axios.get(`${this.baseUrl}${"planets/"}${planetnumber}`);
            return planet;
        }catch (error) {
            console.log("error: ", error);
        };
    };
    async getSpecies(speciesnumber) {
        try{
            const species = await axios.get(`${this.baseUrl}${"species/"}${speciesnumber}`);
            return species;
        }catch (error) {
            console.log("error: ", error);
        };
    };
    async getVehicles(vehiclenumber) {
        try{
            const vehicle = await axios.get(`${this.baseUrl}${"vehicles/"}${vehiclenumber}`);
            return vehicle;
        }catch (error) {
            console.log("error: ", error);
        };
    };
    async getStarships(starshipnumber) {
        try{
            const starship = await axios.get(`${this.baseUrl}${"starships/"}${starshipnumber}`);
            return starship;
        }catch (error) {
            console.log("error: ", error);
        };
    };
    async getPeople(peoplenumber) {
        try{
            const person = await axios.get(`${this.baseUrl}${"people/"}${peoplenumber}`);
            return person;
        }catch (error) {
            console.log("error: ", error);
        };
    };
};
const starWars = new StarWarsApi();