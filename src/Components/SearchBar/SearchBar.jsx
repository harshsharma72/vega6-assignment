import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const searchInput = useRef(null);

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(searchInput.current.value);
  };

  return (
    <div className={styles.searchContainer}>
      <form className={styles.form} onSubmit={handleSearch}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Enter your search item"
            className={styles.searchInput}
            ref={searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            <FaSearch className={styles.searchIcon} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
