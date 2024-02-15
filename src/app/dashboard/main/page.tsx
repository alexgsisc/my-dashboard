import {  WidgetGrid } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboar</h1>
      <span className="text-xl">Informacion genral</span>
      <WidgetGrid/>
    </div>
  );
}