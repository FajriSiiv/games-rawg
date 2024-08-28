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
import { TooltipTag } from "@/components/tooltip-tag";
import { Separator } from "@/components/ui/separator";

const platform_game = [
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

const ratings_game = [
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

  const [gridWidth, setGridWidth] = useState<number>(4);

  useEffect(() => {
    const updateGridWidth = () => {
      if (window.innerWidth <= 640) {
        setGridWidth(2);
      } else if (window.innerWidth <= 768) {
        setGridWidth(3);
      } else if (window.innerWidth <= 1300) {
        setGridWidth(4);
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

  return (
    <div className={`grid grid-cols-4 max-md:grid-cols-3 mt-10 gap-5`}>
      {Array.from({ length: gridWidth }, (_, index) => index).map((a) => (
        <div className="flex flex-col gap-5 " key={a}>
          {groupedGames[a]?.map((game: any) => (
            <div
              className="border overflow-hidden rounded-md relative group bg-slate-800/50 cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-slate-200/20  transition-all"
              key={game.id}
            >
              <Image
                height={200}
                width={300}
                alt={game.name}
                src={game.background_image}
                className="object-cover"
                placeholder="blur"
                blurDataURL="/path-to-low-resolution-image-or-placeholder"
                quality={50}
              />
              <div className="p-2 flex flex-col gap-y-1 overflow-hidden h-fit ">
                {(() => {
                  const highestRating = game.ratings.reduce((max, rating) =>
                    rating.count > max.count ? rating : max
                  );

                  const findIcon = ratings_game.find((p) =>
                    highestRating.title.toLowerCase().includes(p.name)
                  );

                  return (
                    <span
                      className="absolute top-2 right-2 text-2xl z-10 p-2 bg-white/80 rounded-full"
                      key={findIcon?.name}
                    >
                      {findIcon?.icon}
                    </span>
                  );
                })()}
                <div className="flex gap-x-1 flex-wrap">
                  {game.parent_platforms.map((platform: any) => {
                    const findIcon = platform_game.find((p) =>
                      platform.platform.name.toLowerCase().includes(p.name)
                    );

                    return (
                      <span key={platform.platform.id}>{findIcon?.icon}</span>
                    );
                  })}
                </div>
                <h2 className="text-[26px] w-5/6 font-semibold">{game.name}</h2>

                <div className="">
                  <p className="flex text-sm justify-between text-slate-500/50">
                    Release Date :{" "}
                    <span className="text-white/80">{game.released}</span>
                  </p>
                  <Separator className="my-2" />
                  <div className="flex text-sm justify-between text-slate-500/50">
                    <span className="flex-1">Genres : </span>
                    <p className="text-white/80 flex-1 text-end">
                      {game.genres.map((a) => a.name).join(", ")}
                    </p>
                  </div>
                  <Separator className="my-2" />
                  <p className="flex text-sm justify-between text-slate-500/50">
                    Rating :{" "}
                    <span className="text-white/80">{game.rating}</span>
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
