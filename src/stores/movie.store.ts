import { create } from "zustand";

import { getPopularMovies } from "@/services/movie.service";
import type { Movie } from "@/types/movie";

type MovieStore = {
  movies: Movie[];
  loading: boolean;
  loadMovies: () => Promise<void>;
};

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [],
  loading: false,

  loadMovies: async () => {
    set({ loading: true });

    const movies = await getPopularMovies();

    set({
      movies,
      loading: false,
    });
  },
}));