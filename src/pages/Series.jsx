import SerieItem from "../movies/SerieItem";
function Series(props) {
    const { entries } = props.feed;
    const series = entries.filter((movie) => movie.programType === "series");
    if (props.loading) {
        return <h3>Loading...</h3>;
    }
    if (props.error) {
        return <h3>{props.error}</h3>;
    }
    return (
        <div className="row">
            {series.map((serie, index) => (
                <SerieItem key={index} serie={serie} />
            ))}
        </div>
    );
}

export default Series;
