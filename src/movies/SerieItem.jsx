import ImageCard from "../components/ImageCard";

function SerieItem(props) {
    const { images, title, releaseYear } = props.serie;
    return (
        <ImageCard images={images} title={title} releaseYear={releaseYear} />
    );
}

export default SerieItem;
