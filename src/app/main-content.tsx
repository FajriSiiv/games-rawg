import React from "react";
import CardsContent from "./cards-content";
import { getDeveloper, getGames, getGenres } from "../../server/games-api";
import PaginationButton from "@/components/pagination-button";
import { SelectGames } from "@/components/select-genres";
import SearchBar from "@/components/search-bar-games";

export default async function MainContent({ searchParams }: any) {
  const games = await getGames(
    searchParams.page || 1,
    searchParams.genres,
    searchParams.developers
  );

  const genres = await getGenres();
  const developers = await getDeveloper();
  return (
    <div className="flex flex-col">
      <div>
        <h1 className="text-4xl font-semibold mb-10">Trending Games</h1>
        {/* <SearchBar searchValue={searchParams.search} /> */}
        <SelectGames genres={genres} developers={developers} />

        <CardsContent games={games} />

        <PaginationButton games={games} searchParams={searchParams.page || 1} />
      </div>
    </div>
  );
}
