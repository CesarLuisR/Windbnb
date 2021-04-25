import React from "react";
import "../../styles/layout/StayContainer.css";
import json from "../../stays.json";
import Stay from "../common/Stay";
import { useSelector } from "react-redux";

const StayContainer = (props) => {
  const data = useSelector((store) => store.searchInfoReducer.data);

  const filterData = (arr, textFilter) => {
    const info = arr.filter((stay) => {
      let text = textFilter?.location?.replace(",", "");
      let guestsNumber = textFilter?.guests || 0;

      let regExp = new RegExp(text || "", "i");

      if (
        regExp.test(`${stay.city} ${stay.country}`) &&
        stay.maxGuests >= guestsNumber
      ) {
        return stay;
      }

      return null;
    });

    return info;
  };

  return (
    <div className="stay-container">
      <aside className="aside">
        <h1 className="aside__title">
          Stays {data?.location ? `in ${data?.location}` : "around the world"}
        </h1>
        <div className="stays-number">
          {filterData(json, data).length} stays
        </div>
      </aside>
      <main className="main">
        {filterData(json, data).length > 0 ? (
          filterData(json, data).map((stay, index) => {
            return (
              <Stay
                image={stay.photo}
                title={stay.title}
                superhost={stay.superHost}
                type={stay.type}
                beds={stay.beds}
                rating={stay.rating}
                key={index}
              />
            );
          })
        ) : (
          <div className="no-results">No results found</div>
        )}
      </main>
      <footer className="footer">
        Created by Cesar Luis Rijo - devChallenges.io
      </footer>
    </div>
  );
};

export default StayContainer;
