import React from "react";
import "../App.css";
import Cards from "./Cards";

const Search = ({
  value,
  onChange,
  handleClick,
  filteredQuotes,
  handleClear,
}) => {
  return (
    <div className="container search-container ">
      <div className="search-box p-3">
        <input
          type="text"
          placeholder="Search"
          className="search-input"
          value={value}
          onChange={onChange}
        />
        <button
          className="clear-button"
          onClick={handleClear}
          disabled={!value}
        >
          <i className="ri-close-line"></i>
        </button>
        <button className="search-button" onClick={handleClick}>
          <i className="ri-search-line"></i>
        </button>
      </div>

      <div className="search-cards">
        <Cards filteredQuotes={filteredQuotes} />
      </div>
    </div>
  );
};

export default Search;
