import { Pokemon } from "@/pokemons";
import { Metadata } from "next";

interface PokemonProps {
  params: {
    id: string;
  };
}

// Todo generate metadata dynamically
export async function generateMetadata({ params }: PokemonProps): Promise<Metadata> {
  const pokemon = await getPokemon(params.id);
  return {
    title: `${pokemon.name}`,
    description: `Pokemon: ${pokemon.name} , id: ${params.id}`,
  }
}


const getPokemon = async (id: string): Promise<Pokemon> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  console.log('Elemt is: ',res.name);

  return res;
};

export default async function PokemonPage({ params }: PokemonProps) {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Hello Pokemon {params.id}</h1>

    </div>
  );
}
