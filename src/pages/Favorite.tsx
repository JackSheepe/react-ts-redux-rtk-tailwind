import React from "react";
import { useAppSelector } from "../hooks/redux";

function Favorite() {
  const { favourites } = useAppSelector((state) => state.github);

  if (favourites.length === 0)
    return (
      <p className="text-center mt-10">
        Вы ещё не добавили ни одного репозитория в избранное
      </p>
    );

  return (
    <div className="flex justify-center pt-10 mx-auto h-screen w-screen">
      <ul className="list-none mt-10">
        {favourites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorite;
