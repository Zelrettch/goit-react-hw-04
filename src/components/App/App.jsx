import css from "./App.module.css";

import { Toaster } from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import ImageGallery from "../ImageGallery/ImageGallery";
import { TailSpin } from "react-loader-spinner";
import Modal from "react-modal";
import useImages from "./useImages";

Modal.setAppElement("#root");

export default function App() {
  const [fullImage, setFullImage] = useState(null);
  const [items, error, status, hasNext, loadNewQuery, loadPage] = useImages();

  function openModal(id) {
    setFullImage(items.find((e) => e.id === id));
  }

  const isEmpty = items.length == 0;

  return (
    <div className={css.app}>
      <SearchBar onSubmit={loadNewQuery} />
      {status == "error" ? (
        <p>{error}</p>
      ) : (
        <>
          {!isEmpty && <ImageGallery images={items} openModal={openModal} />}
          <TailSpin
            visible={status == "loading"}
            height="60"
            width="60"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperClass={css.loader}
          />
          {hasNext && status == "loaded" && (
            <button onClick={loadPage} className={css.loadBtn}>
              Load more
            </button>
          )}
        </>
      )}
      <Toaster />
      <Modal
        isOpen={fullImage != null}
        onRequestClose={() => setFullImage(null)}
        className={css.modalContent}
        style={{ overlay: { backgroundColor: "rgba(0, 0, 0, 0.7)" } }}
        preventScroll={true}
        onAfterOpen={() => (document.body.style.overflow = "hidden")}
        onAfterClose={() => (document.body.style.overflow = "unset")}
      >
        {fullImage && (
          <img
            src={fullImage.urls.full}
            alt={fullImage.description}
            className={css.modalImage}
          />
        )}
      </Modal>
    </div>
  );
}
