import React from "react";

function Search(props) {
  return (
    <div className="search-component">
      <input placeholder="Keyword" onChange={props.handleChange} className="search-input" />
      <button className="search-btn" onClick={props.handleClick}>Search</button>
    </div>
  );
}

export default Search;
