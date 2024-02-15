"use client";
import { useAppDispatch, useAppSelector } from "@/store";
import {
  addOne,
  initCounterState,
  substractOne,
} from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface CartConterProps {
  value?: number;
}
export interface CounterResponse {
  method: string;
  count: number;
}

const getApiCount = async (): Promise<CounterResponse> => {
  const response = await fetch("/api/counter").then((res) => res.json());
  return response;
};

export const CartCounter = ({ value = 0 }: CartConterProps) => {
  const count = useAppSelector((state) => state.counter.count);
  const dispach = useAppDispatch();

  //useEffect(() => {
  //  dispach(initCounterState(value));
  //}, [dispach, value]);
  useEffect(() => {
    getApiCount().then(({ count }) => dispach(initCounterState(count)));
  }, [dispach]);

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
