import { PokemonSimple } from "..";
import { PokemonCard } from "./PokemonCard";

interface PokemonProps {
  pokemons: PokemonSimple[];
}

export const PokemonGrid = ({ pokemons }: PokemonProps) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemons.map((pokemon) => (
       <PokemonCard key={pokemon.id} pokemon={pokemon}/>
      ))}
    </div>
  );
};
