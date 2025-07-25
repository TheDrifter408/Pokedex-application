import type { PokemonResponse } from "$lib/types";

export const load = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
  const data:PokemonResponse = await response.json();
  console.log('Data: ', data);
  return {
    data
  }
}