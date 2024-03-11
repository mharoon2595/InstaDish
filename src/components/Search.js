import React from "react";

const Search = ({ list, onChange, onClick, onSecondBtnClick }) => {
  return (
    <div className="search-container">
      <div>
        <input type="text" value={list} onChange={onChange} />
        <button onClick={onClick}>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={onSecondBtnClick}>
          Top Rated Restaurants
        </button>
      </div>
    </div>
  );
};

export default Search;
