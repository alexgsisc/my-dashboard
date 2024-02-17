import Link from "next/link";
import { PokemonSimple } from "..";
import Image from "next/image";
import { CardFavorite } from "./CardFavorite";

interface PokemonCardProps {
  pokemon: PokemonSimple;
}

export const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  const { id, name } = pokemon;
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {name}
          </p>
          <div className="mt-5">
            <Link
              href={`pokemons/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Show more...
            </Link>
          </div>
        </div>
        <CardFavorite pokemon={pokemon}/>
      </div>
    </div>
  );
};
