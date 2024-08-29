import React from "react";
import DetailGame from "./detail-game";
import { getGamesDetailById } from "../../../../server/games-api";

export default async function DetailPage(context: any) {
  const { id } = context.params;

  const detailGameById = await getGamesDetailById(id);

  return (
    <div>
      <DetailGame gamesId={id} game={detailGameById} />
    </div>
  );
}
