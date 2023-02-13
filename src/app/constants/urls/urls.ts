import {endpoints} from "../endpoints/endpoints";

const API = 'https://pokeapi.co/api/v2';

export const API_URL = {
  POKEMONS:`${API}/${endpoints.pokemons}`,
  TYPE:`${API}/${endpoints.type}`,
  ABILITY:`${API}/${endpoints.ability}`
}
