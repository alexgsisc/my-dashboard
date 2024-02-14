import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
    count: number;
}

const initialState = {
    count: 5,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //son las acciones que se pueden llamar desde cualquier lugar
    
  },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
