import css from "./ImageCard.module.css";

export default function ImageCard({ image }) {
  return (
    <div className={css.card}>
      <img
        width="360"
        height="200"
        src={image.urls.small}
        alt={image.description}
        data-id={image.id}
      ></img>
    </div>
  );
}
