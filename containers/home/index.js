import React from "react";

import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";
export default function HomeContainer({categories = [],topRatedMovies = [],popularMovies=[], selectedCategory }) {
  return (
    <div>
      <FeaturedMovie movie={topRatedMovies?.[0]} />
      <Categories categories={categories.slice(0, 7)} />

      {selectedCategory.movies.length > 0 && (
        <MoviesSection
          title={
            categories.find((genre) => selectedCategory.id === `${genre.id}`)
              .name
          }
          movies={selectedCategory.movies}
        />
      )}

      <MoviesSection
        title={"Popular Films"}
        movies={topRatedMovies.slice(0, 7)}
      />
      <MoviesSection
        title={"Your Favorites"}
        movies={popularMovies.slice(0, 7)}
      />
    </div>
  );
}
