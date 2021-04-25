import React from "react";
import "../../styles/common/Search.css";

const Search = ({ handleModalState, data }) => {
  return (
    <div className="search">
      <div
        className={data?.location ? "location active" : "location"}
        data-name="location"
        onClick={handleModalState}
      >
        {data?.location ? `${data.location}` : "Add locacation"}
      </div>
      <div
        className={data?.guests ? "guests active" : "guests"}
        data-name="guest"
        onClick={handleModalState}
      >
        {data?.guests ? `${data.guests} guests` : "Add guests"}
      </div>
      <div className="find" data-name="location" onClick={handleModalState}>
        <span
          className="material-icons search-icon"
          data-name="location"
          onClick={handleModalState}
        >
          search
        </span>
      </div>
    </div>
  );
};

export default Search;
