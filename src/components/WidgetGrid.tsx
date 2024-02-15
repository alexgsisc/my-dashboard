"use client";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";
import { IoCartOutline } from "react-icons/io5";

export const WidgetGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        label="Contador"
        title={count.toString()}
        subtitle="Contador Client Side"
        icon={<IoCartOutline size={40} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
