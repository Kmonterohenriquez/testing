import React from "react";
import "../index.css";

const Navbar = () => {
  const menuItem = ["Home", "Shop", "Services"].map((item) => (
    <li className="p-2 cursor-pointer hover:bg-gray-500 hover:bg-opacity-75 rounded-lg">{item}</li>
  ));
  return (
    <div
      className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
      style={{ height: 100, width: "100%" }}
    >
      <div
        className="flex items-center justify-between container mx-auto"
        style={{ height: "100%" }}
      >
        <button className="px-6 py-2 bg-white rounded-lg hover:bg-gray-300">
          Hola
        </button>

        <ul className="text-white flex">{menuItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
