"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CarCunterProps {
  value?: number;
}

export const CartCounter = ({ value = 0 }: CarCunterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispach = useAppDispatch();

  useEffect(() => {
    dispach(initCounterState(value));
  }, [dispach, value]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-.[100px] mr-2"
          onClick={() => dispach(addOne())}
        >
          +1
        </button>

        <button
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-.[100px] mr-2"
          onClick={() => dispach(substractOne())}
        >
          -1
        </button>
      </div>
    </>
  );
};
