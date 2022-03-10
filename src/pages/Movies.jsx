import MovieItem from "../movies/MovieItem";

function Movies(props) {
    const { entries } = props.feed;
    const movies = entries.filter((movie) => movie.programType === "movie");
    if (props.loading) {
        return <h3 className="loading">Loading...</h3>;
    }
    if (props.error) {
        return <h3>{props.error}</h3>;
    }
    return (
        <div className="row">
            {movies.map((movie, index) => (
                <MovieItem key={index} movie={movie} />
            ))}
        </div>
    );
}

export default Movies;
