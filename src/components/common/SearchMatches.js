import React from "react";
import "../../styles/common/SearchMatches.css";

const SearchMatches = (props) => {
  return (
    <div
      className="search-matches"
      onClick={() => props.handleMatches(props.text)}
    >
      <span className="material-icons room-icon">room</span>
      <div className="search-matches__text">{props.text}</div>
    </div>
  );
};

export default SearchMatches;
