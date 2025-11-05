import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="flex-grow">
        <Home />
      </div>
      <Footer text="PokeDex © 2025 - Created by Kamu" />
    </div>
  );
}

export default App;
