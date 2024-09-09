import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import LogoutButton from "./button/logout-button";

export function ProfileMenu({
  user,
}: {
  user: {
    name: string;
    image: string;
  };
}) {
  return (
    <HoverCard>
      <HoverCardTrigger className="flex items-center gap-x-2 justify-center cursor-pointer">
        <Avatar>
          <AvatarImage
            src={user?.image as string}
            alt={user?.name}
            className="rounded-full"
            width={30}
            height={30}
          />
          <AvatarFallback>
            {user?.name
              .split(" ")
              .map((name: string) => name.charAt(0).toUpperCase())
              .join("")}
          </AvatarFallback>
        </Avatar>
        <h2 className="text-sm">{user ? user?.name : "Anonim"}</h2>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit">
        <LogoutButton />
      </HoverCardContent>
    </HoverCard>
  );
}
