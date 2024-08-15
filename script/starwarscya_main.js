function createPlanetChoice(planet, planet1, planet2) {
    const planetContainer = document.querySelectorAll(".cards__button");
    // const planetImage = document.querySelector(".cards__image");
    // planetImage.setAttribute("src", planet.url);
    // planetImage.setAttribute("alt", planet.name);
    const planetName = document.querySelectorAll(".cards__heading");
    planetName[0].innerText = planet.name;
    planetName[1].innerText = planet1.name;
    planetName[2].innerText = planet2.name;
    const climate = document.querySelectorAll(".cards__climate");
    climate[0].innerText = planet.climate;
    climate[1].innerText = planet1.climate;
    climate[2].innerText = planet2.climate;
    const surfaceWater = document.querySelectorAll(".cards__surface-water");
    surfaceWater[0].innerText = `${planet.surface_water} % surface water`;
    surfaceWater[1].innerText = `${planet1.surface_water} % surface water`;
    surfaceWater[2].innerText = `${planet2.surface_water} % surface water`;
    const terrain = document.querySelectorAll(".cards__terrain");
    terrain[0].innerText = planet.terrain;
    terrain[1].innerText = planet1.terrain;
    terrain[2].innerText = planet2.terrain;
    console.log(planet);
}
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); 
  }


const planetNumber = getRandomInt(1, 60);
const planetNumber1 = getRandomInt(1, 60);
const planetNumber2 = getRandomInt(1, 60);

const renderPlanets = async () => {
    const planet = await starWars.getPlanets(planetNumber);
    const planet1 = await starWars.getPlanets(planetNumber1);
    const planet2 = await starWars.getPlanets(planetNumber2);
    // const planetsList = document.querySelector("#cards__planets");
    const card = createPlanetChoice(planet.data, planet1.data, planet2.data);
    return card;
    // planetsList.appendChild(card);
};

renderPlanets();
