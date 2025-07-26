import type { Pokemon } from "$lib/types";

export const load = async ():Promise<{ results: { name: string, id: string }[] }> => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=20');
  const data = await response.json();
  const results = data.results.map((pokemon:Pokemon) => {
    const url = pokemon.url.split('/').filter((str) => str !== '');
    const id = url[url.length - 1];
    return {
      name: pokemon.name,
      id,
    }
  });
  return {
    results: results,
  }
}