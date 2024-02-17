"use client";
import { Provider } from "react-redux";
import { store } from "./";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export const Providers = ({ children }: Props) => {
  useEffect(() => {
    if (localStorage.getItem("favorite-pokemons") !== null) {
      const favorites = JSON.parse(localStorage.getItem("favorite-pokemons")!);
      store.dispatch(setFavoritePokemons(favorites));
    } else {
      store.dispatch(setFavoritePokemons({}));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
