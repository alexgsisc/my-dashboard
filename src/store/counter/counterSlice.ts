import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    addOne(state) {
      state.count++;
    },
    substractOne(state) {
      if (state.count === 0) return;
      state.count--;
    },
    resetCount(state, action: PayloadAction<number>) {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
  },
});

// se exportan las acciones
export const { addOne, substractOne, resetCount } = counterSlice.actions;

export default counterSlice.reducer;
