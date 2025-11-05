import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo"; // sekarang mengambil logo dari folder yang sama

const CardInfo = ({ text }) => {
  return (
    <div className="border p-4 rounded-lg bg-gray-100 shadow-md space-y-3">
      <h3 className="text-lg font-bold">{text}</h3>

      <Evolution text="Evolution Information" />
      <TypeEffect text="Type Effect Information" />

      <Logo text="PokeDex" /> {/* logo kecil */}
    </div>
  );
};

export default CardInfo;
