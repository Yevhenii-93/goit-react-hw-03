import css from "./SearchBar.module.css";

export default function SearchBar({ value, onFilter }) {
  return (
    <div className={css.container}>
      <input
        className={css.search}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
