import React, { useState } from "react";
import { InfRepo } from "../models/models";
import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";

function RepoCard({ repo }: { repo: InfRepo }) {
  const { addFavourite, removeFavourite } = useActions();
  const { favourites } = useAppSelector((state) => state.github);

  const [isFav, setIsFav] = useState(favourites.includes(repo));

  const addToFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    addFavourite(repo);
    setIsFav(true);
  };

  const removeFromFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    removeFavourite(repo);
    setIsFav(false);
  };

  return (
    <div className="border py-2 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
      <a href={repo.html_url} target="_blank">
        <h2 className="text-lg font-bold truncate">{repo.full_name}</h2>
        <p className="text-sm">
          Forks: <span className="font-bold mr-2">{repo.forks}</span>
          Watchers: <span className="font-bold">{repo.watchers}</span>
        </p>
        <p className="text-sm font-thin">{repo.description}</p>

        <button
          className={`py-2 px-4 ${
            !isFav ? "bg-yellow-400" : "bg-red-400"
          } rounded hover:shadow-md transition-all`}
          onClick={!isFav ? addToFavourite : removeFromFavourite}
        >
          {!isFav ? "Добавить" : "Удалить"}
        </button>
      </a>
    </div>
  );
}

export default RepoCard;
