import React from "react";

function Search(props) {
  return (
    <div className="search-component">
      <input className="search-input" />
      <button onClick={props.handleClick}>Search</button>
    </div>
  );
}

export default Search;
