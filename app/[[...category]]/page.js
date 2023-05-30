import HomeContainer from "@/containers/home";
import {
  getCategories,
  getSingleCategory,
  getPopularMovies,
  getTopRatedMovies,
} from "@/services/movie";

export default async function Home({ params }) {
  let selectedCategory;
  const [
    { genres: categories },
    { results: topRatedMovies },
    { results: popularMovies },
  ] = await Promise.all([getCategories(), getTopRatedMovies(), getPopularMovies()]);

  if (params.category?.length > 0) {
    const { results } = await getSingleCategory(params.category[0]);
    selectedCategory = results;
  }
  return (
    <HomeContainer
      topRatedMovies={topRatedMovies}
      popularMovies={popularMovies}
      categories={categories}
      selectedCategory={{
        id: params.category?.[0] ?? "",
        movies: selectedCategory ? selectedCategory.slice(0, 14) : [],
      }}
    />
  );
}
