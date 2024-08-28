import React from "react";
import CardsContent from "./cards-content";
import { getGames, getGenres } from "../../server/games-api";
import PaginationButton from "@/components/pagination-button";
import { SelectGenres } from "@/components/select-genres";

export default async function MainContent({ searchParams }: any) {
  const games = await getGames(searchParams.page || 1);

  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-7xl font-semibold">New and trending</h1>
        <span className="text-sm">Based on player counts and release date</span>

        <CardsContent games={games} />

        <PaginationButton searchParams={searchParams.page || 1} />
      </div>
    </div>
  );
}
