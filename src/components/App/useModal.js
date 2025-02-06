import { useState } from "react";

export default function useModal() {
  const [fullImage, setFullImage] = useState(null);
  const isOpen = fullImage != null;

  function openModal(image) {
    setFullImage(image);
  }
  function closeModal() {
    setFullImage(null);
  }

  return [fullImage, isOpen, openModal, closeModal];
}
