import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Поиск</h3>

      <span>
        <Link to="/react-ts-redux-rtk-tailwind/" className="mr-2">
          Главная
        </Link>
        <Link to="/react-ts-redux-rtk-tailwind/fav">Избранное</Link>
      </span>
    </nav>
  );
}

export default Navigation;
