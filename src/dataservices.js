// dataservice.js
import axios from "axios";

async function getVehicles() {
  const results = await axios.get("https://swapi.dev/api/vehicles/");
  return results.data.results;
}

async function getPlanets() {
  const results = await axios.get("https://swapi.dev/api/planets/");
  return results.data.results;
}

async function getStarships() {
  const results = await axios.get("https://swapi.dev/api/starships/");
  return results.data.results;
}

export { getVehicles, getPlanets, getStarships };
console.log(await getVehicles());
