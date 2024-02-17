import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PokemonSimple } from "@/pokemons";

/**
 {
    '1': {id:1, name: 'bulbasaur'},
    '2': {id:2, name: 'ivysaur'},
    '3': {id:3, name: 'venusaur'},
 }
 */

//create interface PokemonState
interface PokemonState {
  [key: string]: PokemonSimple;
}

const initialState: PokemonState = {
  "1": { id: "1", name: "bulbasaur" },
  "8": { id: "8", name: "wartortle" },
  "25": { id: "25", name: "pikachu" },
  "132": { id: "132", name: "ditto" },
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<PokemonSimple>) {
      const { id, name } = action.payload;
      if (!!state[id]) {
        delete state[id];
        return;
      } else {
        state[id] = { id, name };
      }
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
