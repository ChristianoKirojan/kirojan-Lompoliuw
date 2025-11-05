// src/components/Header/Logo.jsx
import React from "react";

const Logo = ({ text }) => {
  return (
    <h1 className="text-3xl font-bold text-blue-600">
      {text}
    </h1>
  );
};

export default Logo;
