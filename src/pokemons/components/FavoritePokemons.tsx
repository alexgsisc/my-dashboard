"use client";
import React, { useState } from "react";
import { PokemonGrid } from "..";
import { useAppSelector } from "@/store";
import { IoHeartCircleOutline } from "react-icons/io5";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );
  const [pokemons, setPokemons] = useState(favoritePokemons);

  return (
    <>
      {pokemons.length > 0 ? (
        <PokemonGrid pokemons={pokemons} />
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
