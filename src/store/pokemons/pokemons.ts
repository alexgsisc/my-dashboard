import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonSimple } from "@/pokemons";


//create interface PokemonState
interface PokemonState {
  favorites: { [key: string]: PokemonSimple };
}

const initialState: PokemonState = {
  favorites: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: PokemonSimple }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<PokemonSimple>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: No se debe de hacer en Redux
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
