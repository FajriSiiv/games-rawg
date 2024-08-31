"use client";
import { platform_game, ratings_game } from "@/app/cards-content";
import { BreadcrumbDetail } from "@/components/breadcrumb-detail";
import { Separator } from "@/components/ui/separator";
import React from "react";

const monthNames = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

const DetailGame = ({ game }: any) => {
  const dateString = game.released;
  const [year, month, day] = dateString.split("-");

  const monthName = monthNames[parseInt(month, 10) - 1];

  const highestRating = game?.ratings?.length
    ? game.ratings.reduce(
        (max: any, rating: any) => (rating.count > max.count ? rating : max),
        { count: 0 }
      )
    : null;

  const findRating = highestRating?.title
    ? ratings_game.find((p) =>
        highestRating.title.toLowerCase().includes(p.name)
      )
    : null;

  const platformPlay = game.platforms
    .map((platformObj: any) => platformObj.platform.name)
    .join(", ");

  const genresGame = game.genres.map((genre: any) => genre.name).join(", ");
  const developerGame = game.developers.map((dev: any) => dev.name).join(", ");
  const publisherGame = game.publishers
    .map((publisher: any) => publisher.name)
    .join(", ");
  const storesGame = game.stores
    .map((store: any) => store.store.name)
    .join(", ");
  const tagsGame = game.tags
    .slice(0, 3)
    .map((tag: any) => tag.name)
    .join(", ");

  const ColumDetailGame = ({ title, results }: any) => {
    return (
      <div className="flex flex-col gap-y-2">
        <p className="text-slate-100/80 font-bold">{title}</p>
        <div>
          <p className=" text-lg">{results}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={`p-10 relative`}>
      <div
        className={` h-screen max-h-[1000px] w-full absolute -z-10 left-0 top-0`}
        style={{
          backgroundImage: `linear-gradient(rgba(15, 15, 15, 0.071), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.131), rgba(21, 21, 21, 0.5)),url(${game.background_image})`,
          backgroundColor: "transparent",
        }}
      ></div>
      <div className="max-w-[1400px] mx-auto">
        <BreadcrumbDetail nameGame={game.name_original} />
        <div className="flex gap-10 mt-10">
          <div className="max-w-[900px] flex flex-col gap-y-3">
            <div className="flex gap-x-3 items-center">
              <p className="p-1.5 bg-white text-secondary font-semibold rounded-md text-sm">
                {monthName} {day}, {year}
              </p>
              <p className="border border-white rounded-md p-1.5 text-sm uppercase tracking-widest">
                avarage play time : {game.playtime} hours
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
            <div className="flex space-x-4">
              <div className="flex flex-col space-y-2">
                <h2 className="capitalize text-4xl font-semibold flex gap-x-2">
                  {findRating && findRating?.name}{" "}
                  {findRating && findRating?.icon}
                </h2>
                <h3 className="text-xl underline">{game.rating} Rating</h3>
              </div>
              <Separator orientation="vertical" className="bg-slate-300" />
              <div className="flex flex-col space-y-2">
                <h2 className="capitalize text-4xl font-semibold">Reviews</h2>
                <h3 className="text-xl underline">{game.reviews_count}</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10 p-4 bg-slate-900/70 rounded-md">
              <ColumDetailGame title="Platform" results={platformPlay} />
              <ColumDetailGame title="Genre" results={genresGame} />
              <ColumDetailGame title="Developer" results={developerGame} />
              <ColumDetailGame title="Publisher" results={publisherGame} />
              <ColumDetailGame title="Tags" results={tagsGame} />
              <ColumDetailGame title="Stores" results={storesGame} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailGame;
