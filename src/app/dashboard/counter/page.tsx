import { CartCounter } from "@/app/shopping-cart";

export const metadata = {
  title: "Shoping cart",
  description: "Shoping cart",
};

export default function CounterPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Products on car</span>
      <CartCounter />
    </div>
  );
}
