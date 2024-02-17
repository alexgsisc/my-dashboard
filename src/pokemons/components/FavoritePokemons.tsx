"use client";
import React from "react";
import { PokemonGrid } from "..";
import { useAppSelector } from "@/store";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons);

  return <PokemonGrid pokemons={Object.values(pokemons)} />;
};
