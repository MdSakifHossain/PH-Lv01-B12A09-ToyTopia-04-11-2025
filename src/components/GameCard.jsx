import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="group relative transition-transform duration-150 hover:-translate-y-3">
      {/* overlay */}
      <div className="absolute inset-0 rounded bg-black/60 opacity-0 transition-opacity duration-200 group-hover:opacity-100"></div>
      {/* image */}
      <img className="rounded w-full " src={game.thumbnail} alt={game.title} />
      {/* info */}
      <div className="px-3 absolute bottom-0 translate-y-8 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 group-hover:-translate-y-7">
        <h3 className="text-2xl font-medium">{game.title}</h3>
        <p className=" text-sm">{game.short_description}</p>
      </div>
    </div>
  );
};

export default GameCard;
