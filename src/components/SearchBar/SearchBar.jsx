import css from "./SearchBar.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const query = e.target.elements.search.value.trim();
    if (query) {
      onSubmit(query.toLowerCase());
      e.target.reset();
    } else {
      toast.error("Please enter some text");
    }
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          className={css.search}
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          <FiSearch />
        </button>
      </form>
    </header>
  );
}
