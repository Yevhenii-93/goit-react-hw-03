import css from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={css.container}>
      <input className={css.search} />
    </div>
  );
}
