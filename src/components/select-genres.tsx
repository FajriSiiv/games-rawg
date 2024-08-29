import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";

export function SelectGenres({ genres, setSelectGenre, selectedGenre }: any) {
  const submitSelectGenre = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedGenre) {
      console.log("Selected Genre ID:", selectedGenre);
    } else {
      console.log("No genre selected");
    }
  };

  const handleSelectChange = (value: string) => {
    setSelectGenre(value);
  };
  return (
    <form onSubmit={submitSelectGenre}>
      <Select onValueChange={handleSelectChange} defaultValue={selectedGenre}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            {genres.map((genre: any) => (
              <SelectItem value={genre.id.toString()} key={genre.id}>
                {genre.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Button type="submit">Select</Button>
    </form>
  );
}
