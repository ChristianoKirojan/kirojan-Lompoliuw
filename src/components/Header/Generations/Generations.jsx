import React from "react";
import Gen1 from "./Gen1";
import Gen2 from "./Gen2";
import Gen3 from "./Gen3";
import Gen4 from "./Gen4";

const Generations = ({ text }) => {
  return (
    <div className="p-4 border rounded-lg bg-gray-100 shadow-md">
      <h2 className="font-semibold text-lg mb-2">{text}</h2>

      <div className="grid grid-cols-2 gap-2">
        <Gen1 text="Gen 1" />
        <Gen2 text="Gen 2" />
        <Gen3 text="Gen 3" />
        <Gen4 text="Gen 4" />
      </div>
    </div>
  );
};

export default Generations;
