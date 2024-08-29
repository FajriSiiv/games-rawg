"use client";
import { platform_game } from "@/app/cards-content";
import { BreadcrumbDetail } from "@/components/breadcrumb-detail";
import React from "react";

const DetailGame = ({ gamesId, game }: any) => {
  console.log(game);

  return (
    <div className="p-10">
      <BreadcrumbDetail nameGame={game.name_original} />
      <div className="flex gap-10 mt-10">
        <div className="flex-1 flex flex-col gap-y-3">
          <div className="flex gap-x-3 items-center">
            <p className="p-2 bg-white text-secondary font-semibold rounded-md">
              {game.released}
            </p>
            {game.metacritic_platforms.map((platform: any, index: any) => {
              const findIcon = platform_game.find((p) =>
                platform.platform.name.toLowerCase().includes(p.name)
              );
              return (
                <div
                  className="p-2 bg-white text-secondary rounded-md"
                  key={index}
                >
                  {findIcon?.icon}
                </div>
              );
            })}
          </div>
          <h1 className="text-7xl font-bold">{game.name}</h1>
          <div className="flex flex-col">
            <h2 className="font-semibold text-3xl">About</h2>
            <p>{game.description.replace(/<\/?p>/g, "").slice(0, 300)}...</p>
          </div>
        </div>
        <div className="flex-[1.5]"></div>
      </div>
    </div>
  );
};

export default DetailGame;
