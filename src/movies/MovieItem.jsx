import ImageCard from "../components/ImageCard";

function MovieItem(props) {
    const { images, title, releaseYear } = props.movie;
    return (
        <ImageCard images={images} title={title} releaseYear={releaseYear} />
    );
}

export default MovieItem;
