import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import useModal from "./useModal";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import useImages from "./useImages";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [items, error, status, hasNext, loadNewQuery, loadPage] = useImages();
  const [fullImage, isModalOpen, openModal, closeModal] = useModal();

  function enableModal(id) {
    openModal(items.find((e) => e.id === id));
  }

  const isEmpty = items.length == 0;

  return (
    <div className={css.app}>
      <SearchBar onSubmit={loadNewQuery} />
      {status == "error" ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {!isEmpty && <ImageGallery images={items} openModal={enableModal} />}
          {status == "loading" && <Loader />}
          {hasNext && status == "loaded" && <LoadMoreBtn onClick={loadPage} />}
        </>
      )}
      {isModalOpen && (
        <ImageModal onCloseModal={closeModal} image={fullImage} />
      )}
      <Toaster />
    </div>
  );
}
