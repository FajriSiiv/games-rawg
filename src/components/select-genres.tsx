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

export function SelectGenres({
  genres,
  selectedGenre,
}: {
  genres: any;
  selectedGenre: number | any;
}) {
  return (
    <Select defaultValue={selectedGenre} name="genre">
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
  );
}
