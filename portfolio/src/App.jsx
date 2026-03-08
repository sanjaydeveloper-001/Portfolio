import React from "react";
import Profile from "./components/Profile";
import Details from "./components/Details";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-linear-to-br from-[#020305] via-[#05070a] to-[#030405] flex flex-col md:grid lg:grid-cols-3 gap-4 p-4 text-white">
      <Profile className="col-span-2 lg:col-span-1 w-full lg:h-[calc(100vh-2rem)]" />
      <Details className="col-span-2 w-full lg:h-[calc(100vh-2rem)]" />
    </div>
  );
}
