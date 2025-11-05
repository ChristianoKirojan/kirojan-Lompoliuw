import React from "react";
import Logo from "./Logo";
import Generations from "./Generations/Generations.jsx";


const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-200">
      <Logo text="Header" />
      <Generations text="Generation" />
    </header>
  );
};

export default Header;
