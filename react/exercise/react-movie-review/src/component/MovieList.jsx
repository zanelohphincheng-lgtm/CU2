import MovieCard from "./MovieCard";

const MovieList = ({ movies = [] }) => {
  // If no movies exist yet, render a fallback message or single card
  if (movies.length === 0) {
    return <MovieCard />;
  }

  return (
    <div className="d-flex flex-column">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;