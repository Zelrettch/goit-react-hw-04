import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ images, openModal }) {
  function handleClick(e) {
    if (e.target.tagName != "IMG") return;
    openModal(e.target.dataset.id);
  }
  return (
    <ul onClick={handleClick} className={css.gallery}>
      {images.map((e) => (
        <li key={e.id}>
          <ImageCard image={e} />
        </li>
      ))}
    </ul>
  );
}
