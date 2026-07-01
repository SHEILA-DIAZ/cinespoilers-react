import type { Movie } from "@/types/movie";
import { httpClient } from "./http-client";

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await httpClient.get("/movie/popular", {
    params: {
      language: "es-PE",
      page: 1,
    },
  });

  return response.data.results.map((movie: any) => ({
    id: String(movie.id),
    title: movie.title,
    genre: "TMDB",
    posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    synopsis: movie.overview || "Sin descripción disponible.",
  }));
};