import { PokemonGrid, PokemonSimple, PokemonsResponse } from "@/app/pokemons";

const getPokemons = async (
  limit = 10,
  offset = 0
): Promise<PokemonSimple[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/")[6],
    name: pokemon.name,
  }));
  return pokemons;
};
export default async function PokemonsPage() {
  const pokemons = await getPokemons(20);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Pokemons <small>Static</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
