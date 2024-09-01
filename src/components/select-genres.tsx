"use client";
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
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export function SelectGames({ genres, developers }: any) {
  const paramsSearch = useSearchParams();
  const genreParams = paramsSearch.get("genres");
  const developersParams = paramsSearch.get("developers");

  const [selectedGenre, setSelectedGenre] = useState<any>(genreParams);
  const [selectedDeveloper, setSelectedDeveloper] =
    useState<any>(developersParams);

  const submitSelectGames = (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedGenre) {
      window.location.href = `/?genres=${selectedGenre}`;
    }

    if (selectedDeveloper) {
      window.location.href = `/?developers=${selectedDeveloper}`;
    }

    if (selectedGenre && selectedDeveloper) {
      window.location.href = `/?genres=${selectedGenre}&developers=${selectedDeveloper}`;
    }
  };

  const handleSelectGenre = (value: string) => {
    setSelectedGenre(value);
  };

  const handleSelectDeveloper = (value: string) => {
    setSelectedDeveloper(value);
  };

  return (
    <form
      onSubmit={submitSelectGames}
      className="flex w-fit gap-3 max-md:flex-col"
    >
      <Select
        onValueChange={handleSelectGenre}
        defaultValue={selectedGenre ? selectedGenre : undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Genre" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Genres</SelectLabel>
            {genres.map((genre: any) => (
              <SelectItem value={genre.slug} key={genre.id}>
                {genre.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select
        onValueChange={handleSelectDeveloper}
        defaultValue={selectedDeveloper ? selectedDeveloper : undefined}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Developer" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Developer</SelectLabel>
            {developers.map((developer: any) => (
              <SelectItem value={developer.slug} key={developer.id}>
                {developer.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button type="submit">Select</Button>
    </form>
  );
}
