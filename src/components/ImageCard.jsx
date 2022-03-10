import style from "./ImageCard.module.css";
function ImageCard(props) {
    return (
        <div className={style.card}>
            <img src={props.images["Poster Art"].url} alt={props.title} />
            <p>{props.title}</p>
            <p>{props.releaseYear}</p>
        </div>
    );
}

export default ImageCard;
