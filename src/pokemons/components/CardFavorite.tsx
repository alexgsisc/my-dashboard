"use client";
import { PokemonSimple } from "..";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface CardFavoriteProps {
  pokemon: PokemonSimple;
}

export const CardFavorite = ({ pokemon }: CardFavoriteProps) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons[id]);
  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
    console.log("onToggleFavorite", pokemon);
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="border-b">
      <div
        onClick={onToggleFavorite}
        className="px-4 py-2 hover:bg-gray-100 flex cursor-pointer"
      >
        <div className="text-red-600">
          {isFavorite ? <IoHeart /> : <IoHeartOutline />}
        </div>
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </p>
          <p className="text-xs text-gray-500">Update your favorite</p>
        </div>
      </div>
    </div>
  );
};
