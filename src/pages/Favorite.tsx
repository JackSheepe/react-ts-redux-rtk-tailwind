import React from "react";
import { useAppSelector } from "../hooks/redux";
import RepoCard from "../components/RepoCard";

function Favorite() {
  const { favourites } = useAppSelector((state) => state.github);
  console.log(favourites);

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
          <RepoCard repo={f} key={f.id} />
        ))}
      </ul>
    </div>
  );
}

export default Favorite;
