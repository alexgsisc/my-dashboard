"use client";
import { useAppSelector } from "@/store";
import { useEffect, useState } from "react";
import { IoHeartCircleOutline } from "react-icons/io5";
import { PokemonGrid } from "..";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );
  // const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   console.log({ favoritePokemons });
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return (
    <>
      {/* <PokemonGrid pokemons={ favoritePokemons } /> */}
      {favoritePokemons.length < 0 ? (
        <PokemonGrid pokemons={favoritePokemons} />
      ) : (
        <EmptyFavoritePokemons />
      )}
    </>
  );
};

export const EmptyFavoritePokemons = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartCircleOutline size={150} className="text-red-500" />
      <span>No hay pokemons favoritos</span>
    </div>
  );
};
