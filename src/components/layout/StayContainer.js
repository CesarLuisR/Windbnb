import React from "react";
import "../../styles/layout/StayContainer.css";
import json from "../../stays.json";
import Stay from "../common/Stay";
import { useSelector } from "react-redux";

const StayContainer = () => {
  const data = useSelector((store) => store.searchInfoReducer.data);

  const filterData = (arr, textFilter) => {
    const info = arr.filter((stay) => {
      let text = textFilter?.location?.replace(",", "");
      let guestsNumber = textFilter?.guests || 0;
      return (
        new RegExp(text || "", "i").test(`${stay.city} ${stay.country}`) &&
        stay.maxGuests >= guestsNumber &&
        stay
      );
    });

    return info;
  };

  const stays = () => {
    const info = filterData(json, data);
    return info.length === 0 ? (
      <div className="no-results">No results found</div>
    ) : (
      info.map((stay, index) => (
        <Stay
          image={stay.photo}
          title={stay.title}
          superhost={stay.superHost}
          type={stay.type}
          beds={stay.beds}
          rating={stay.rating}
          key={index}
        />
      ))
    );
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
      <main className="main">{stays()}</main>
      <footer className="footer">
        Created by Cesar Luis Rijo - devChallenges.io
      </footer>
    </div>
  );
};

export default StayContainer;
