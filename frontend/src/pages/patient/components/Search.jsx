import style from "./Search.module.css";

const Search = () => {
  return (
    <div className={style.searchContainer} id="flexSpaceBetween">
      <div id="flexCenter">
        <iconify-icon
          icon="material-symbols:search"
          className={style.search}
          id="flexCenter"
        />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search drug"
        />
      </div>
      <iconify-icon
        icon="line-md:filter-filled"
        className={style.filter}
        id="flexCenter"
      ></iconify-icon>
    </div>
  );
};

export default Search;
