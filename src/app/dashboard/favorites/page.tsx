import {
  FavoritePokemons,
} from "@/pokemons";

export const metadata = {
  title: "Pokemons Favorites",
  description: "Favorite List of Pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        List of Pokemons{" "}
        <small className="text-6xl text-blue-500">Global state</small>
      </span>
      <FavoritePokemons />
    </div>
  );
}
