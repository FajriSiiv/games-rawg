"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function SearchBar({ searchValue }: any) {
  const [searchGame, setSearchGame] = useState(searchValue);

  const searchTheGame = () => {
    window.location.href = `?search=${searchGame}`;
  };

  return (
    <div className="flex w-full max-w-sm items-center space-x-2 mb-10">
      <Input
        type="text"
        placeholder="Search a game"
        onChange={(e) => setSearchGame(e.target.value)}
      />
      <Button onClick={searchTheGame}>Submit</Button>
    </div>
  );
}

export default SearchBar;
