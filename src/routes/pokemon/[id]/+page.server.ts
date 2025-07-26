import type { SinglePokemon } from '$lib/types/index';

export const load = async ({ params }):Promise<SinglePokemon> => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
  const data:SinglePokemon = await response.json();
  return {
    ...data,
  }
}