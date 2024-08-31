const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export const getGames = async (
  page: number | string,
  genres: string | number,
  developers: string
) => {
  let currentPage = page || 1;
  const resultGenre = await getGenres();
  let genresSet = "";
  let dev = "";
  if (developers) {
    dev = `&developers=${developers}`;
  }

  if (genres) {
    const numberGenre = resultGenre?.find(
      (genre: any) => genre.slug === genres
    ).id;
    genresSet = `&genres=${numberGenre}`;
  }

  try {
    const res = await fetch(
      `${API_URL}/games?key=${API_KEY}&page=${currentPage.toString()}&page_size=35${genresSet}${dev}`,
      {
        next: { revalidate: 3000 },
      }
    );

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getGenres = async () => {
  try {
    const res = await fetch(`${API_URL}/genres?key=${API_KEY}`, {
      next: { revalidate: 240 },
    });

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getDeveloper = async () => {
  try {
    const res = await fetch(`${API_URL}/developers?key=${API_KEY}`, {
      next: { revalidate: 240 },
    });

    const data = await res.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getGamesDetailById = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/games/${id}?key=${API_KEY}`, {
      next: { revalidate: 240 },
    });

    const data = await res.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
