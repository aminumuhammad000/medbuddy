import React from "react";
import style from "./Search.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  return (
    <div className={style.searchContainer}>
      <div>
        <FontAwesomeIcon icon={faSearch} className={style.search} />{" "}
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search drug"
        />
      </div>
      <FontAwesomeIcon icon={faFilter} className={style.filter} />
    </div>
  );
};

export default Search;
