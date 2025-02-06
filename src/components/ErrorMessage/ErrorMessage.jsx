import css from "./ErrorMessage.module.css";

export default function ErrorMessage({ error }) {
  return (
    <div className={css.errorContainer}>
      <p>{error}</p>
    </div>
  );
}
