import { PokemonSimple } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

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
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
