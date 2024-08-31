"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SiPlaystation, SiXbox, SiNintendoswitch } from "react-icons/si";
import { RiComputerFill } from "react-icons/ri";
import { BsFire } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { LuMeh } from "react-icons/lu";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

export const platform_game = [
  {
    name: "playstation",
    icon: <SiPlaystation />,
  },
  {
    name: "xbox",
    icon: <SiXbox />,
  },
  {
    name: "pc",
    icon: <RiComputerFill />,
  },
  {
    name: "mac",
    icon: <FaApple />,
  },
  {
    name: "nintendo",
    icon: <SiNintendoswitch />,
  },
];

export const ratings_game = [
  {
    name: "exceptional",
    icon: <BsFire className="text-rose-500" />,
  },
  {
    name: "recommended",
    icon: <AiFillLike className="text-yellow-500" />,
  },
  {
    name: "meh",
    icon: <LuMeh className="text-yellow-500" />,
  },
  {
    name: "skip",
    icon: <MdOutlineDoNotDisturbOn className="text-rose-500" />,
  },
];

const CardsContent = ({ games }: { games: any }) => {
  // const [games, setGames] = useState([]);

  const [gridWidth, setGridWidth] = useState<number>(5);

  useEffect(() => {
    const updateGridWidth = () => {
      if (window.innerWidth <= 640) {
        setGridWidth(2);
      } else if (window.innerWidth <= 768) {
        setGridWidth(3);
      } else if (window.innerWidth <= 1300) {
        setGridWidth(5);
      }
    };

    updateGridWidth();

    window.addEventListener("resize", updateGridWidth);

    return () => {
      window.removeEventListener("resize", updateGridWidth);
    };
  }, []);

  function gameGroup(data: [], numberOfGroups: number) {
    const groups = [];
    const groupSize = Math.ceil(data?.length / numberOfGroups);

    for (let i = 0; i < numberOfGroups; i++) {
      const start = i * groupSize;
      const end = start + groupSize;
      groups.push(data?.slice(start, end));
    }

    return groups;
  }

  const groupedGames = gameGroup(games, gridWidth);

  const linkDetailGame = (id: any) => {
    window.location.href = `/games/${id}`;
  };

  return (
    <div className={`grid grid-cols-5 max-md:grid-cols-3 mt-10 gap-5`}>
      {Array.from({ length: gridWidth }, (_, index) => index).map((a) => (
        <div className="flex flex-col gap-5 " key={a}>
          {groupedGames[a]?.map((game: any) => (
            <div
              className="border overflow-hidden rounded-md relative group bg-slate-800/50 cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-slate-200/20  transition-all"
              key={game.id}
              onClick={() => linkDetailGame(game.id)}
            >
              {game.background_image ? (
                <Image
                  height={200}
                  width={300}
                  alt={game.name}
                  src={game.background_image}
                  className="object-cover"
                  loading="lazy"
                  quality={30}
                />
              ) : (
                <div className="h-[200px] w-full bg-rose-500/30 flex justify-center items-center">
                  <p className="text-3xl">NO IMAGE</p>
                </div>
              )}
              <div className="p-2 flex flex-col gap-y-1 overflow-hidden h-fit ">
                {(() => {
                  const highestRating = game?.ratings?.length
                    ? game.ratings.reduce(
                        (max: any, rating: any) =>
                          rating.count > max.count ? rating : max,
                        { count: 0 }
                      )
                    : null;

                  const findIcon = highestRating?.title
                    ? ratings_game.find((p) =>
                        highestRating.title.toLowerCase().includes(p.name)
                      )
                    : null;

                  return (
                    findIcon && (
                      <span
                        className="absolute top-2 right-2 text-2xl z-10 p-2 bg-white/80 rounded-full"
                        key={findIcon?.name}
                      >
                        {findIcon?.icon}
                      </span>
                    )
                  );
                })()}
                <div className="flex gap-x-1 flex-wrap">
                  {game.parent_platforms.map((platform: any) => {
                    const findIcon = platform_game
                      ? platform_game.find((p) =>
                          platform.platform.name.toLowerCase().includes(p.name)
                        )
                      : null;

                    return (
                      findIcon && (
                        <span key={platform.platform.id}>{findIcon?.icon}</span>
                      )
                    );
                  })}
                </div>
                <h2 className="text-[16px] w-5/6 font-semibold">{game.name}</h2>

                <div className="">
                  <p className="flex text-sm justify-between text-slate-500/50">
                    Release Date :{" "}
                    <span className="text-white/80">{game.released}</span>
                  </p>
                  <Separator className="my-2" />
                  <div className="flex text-sm justify-between text-slate-500/50">
                    <span className="flex-1">Genres : </span>
                    <p className="text-white/80 flex-1 text-end">
                      {game.genres
                        .slice(0, 6)
                        .map((a: any) => a.name)
                        .join(", ")}
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <p className="flex text-sm justify-between text-slate-500/50">
                    Rating :{" "}
                    <span className="text-white/80">
                      {game.rating === 0 ? "No Rating" : game.rating}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CardsContent;
