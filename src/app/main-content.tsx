import { getServerSession } from "next-auth";
import CardsContent from "./cards-content";
import { getDeveloper, getGames, getGenres } from "../../server/games-api";
import PaginationButton from "@/components/pagination-button";
import { SelectGames } from "@/components/select-genres";
import { nextAuthOptions } from "@/lib/nextAuth";
import LoginButton from "@/components/button/login-button";
import LogoutButton from "@/components/button/logout-button";
import Image from "next/image";
import { ProfileMenu } from "@/components/profile-menu";

export default async function MainContent({ searchParams }: any) {
  const session: any = await getServerSession(nextAuthOptions);

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
        <div className="flex justify-between w-full items-start">
          <h1 className="text-4xl font-semibold mb-10">Trending Games</h1>
          {!session ? (
            <>
              <LoginButton />
            </>
          ) : (
            // <div className="flex justify-center items-center gap-x-2">
            //   <h2 className="text-sm">
            //     {session ? session.user?.name : "Anonim"}
            //   </h2>
            //   <Image
            //     src={session.user?.image as string}
            //     alt={session.user?.name}
            //     className="rounded-full"
            //     width={30}
            //     height={30}
            //   />

            //   <LogoutButton />
            // </div>
            <>
              <ProfileMenu user={session.user} />
            </>
          )}
        </div>

        <SelectGames genres={genres} developers={developers} />

        <CardsContent games={games} />

        <PaginationButton games={games} searchParams={searchParams.page || 1} />
      </div>
    </div>
  );
}
