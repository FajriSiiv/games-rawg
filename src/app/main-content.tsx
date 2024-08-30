import React from "react";
import CardsContent from "./cards-content";
import { getGames } from "../../server/games-api";
import PaginationButton from "@/components/pagination-button";

export default async function MainContent({ searchParams }: any) {
  const games = await getGames(searchParams.page || 1);
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-7xl font-semibold">Trending Games</h1>

        <CardsContent games={games} />

        <PaginationButton searchParams={searchParams.page || 1} />
      </div>
    </div>
  );
}
