import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import "../../styles/layout/Modal.css";
import json from "../../stays.json";
import CustomSearch from "../common/CustomSearch";
import SearchMatches from "../common/SearchMatches";
import GuestCounter from "../common/GuestCounter";

const Modal = (props) => {
  const [modalState, setModalState] = useState();
  const [locationInfo, setLocationInfo] = useState();
  const [counter, setCounter] = useState(0);
  const modalRef = useRef();
  const minWidth = window.matchMedia("(max-width: 600px)");
  const handleModalState = (target) => setModalState(target);
  const handleLocationChange = (e) => setLocationInfo(e.target.value);
  const handleMatches = (text) => setLocationInfo(text);

  const handleCounter = (type) => {
    if (type === "increase") setCounter(counter + 1);
    else setCounter(counter - 1);
  };

  const text = json.map((element) => {
    return { city: element.city, country: element.country };
  });

  const handleData = (arr) => {
    let city = arr.map((element) => element.city);
    let stack = [];

    for (let element of city) {
      while (city.indexOf(element) !== city.lastIndexOf(element)) {
        city.splice(city.lastIndexOf(element), 1);
      }
    }

    for (let el of city) {
      for (let i of arr) {
        if (i.city === el) {
          stack.push({ city: el, country: i.country });
          break;
        }
      }
    }

    return stack;
  };

  const data = handleData(text);

  const handleClose = useCallback(() => {
    modalRef.current.nextElementSibling.style.opacity = "1";
    modalRef.current.style.animation = "deactivate-modal .8s both";
    props.closeModal();
  }, [props]);

  const matches = modalState === "location" && (
    <div className="matches">
      {data.map((stay, index) => {
        let filterText = locationInfo && locationInfo.replace(",", "");
        let regText = new RegExp(filterText, "i");

        return regText.test(`${stay.city} ${stay.country}`) && (
          <SearchMatches
            key={index}
            text={`${stay.city}, ${stay.country}`}
            handleMatches={handleMatches}
          />
        );
      })}
    </div>
  );

  const guest = modalState === "guest" && (
    <div className="guest-zone">
      <GuestCounter
        title="Adults"
        subtitle="Ages 13 or above"
        handleCounter={handleCounter}
        maxCounter={16}
      />
      <GuestCounter
        title="Children"
        subtitle="Ages 2-12"
        handleCounter={handleCounter}
        maxCounter={5}
      />
    </div>
  );

  const mobileMiniContainer = minWidth.matches && (
    <div className="mobile-mini-container">
      <span className="mobile-mini-container__text">Edit your search</span>
      <span className="material-icons" onClick={handleClose}>
        clear
      </span>
    </div>
  );

  useEffect(() => {
    setModalState(props.state);

    if (props.render) {
      modalRef.current.style.animation = "active-modal .8s both";
      modalRef.current.nextElementSibling.style.opacity = "0.5";
    }

    modalRef.current.parentElement.onclick = (e) => {
      if (e.target !== modalRef.current && props.render) {
        if (e.target.matches(".modal *")) return;
        handleClose();
      }
    };
  }, [props, handleClose]);

  return ReactDOM.createPortal(
    <div ref={modalRef} className="modal">
      {mobileMiniContainer}
      <div className="modal__container">
        <CustomSearch
          counter={counter}
          modalState={modalState}
          locationInfo={locationInfo}
          handleClose={handleClose}
          handleModalState={handleModalState}
          handleLocationChange={handleLocationChange}
        />
        {matches}
        {guest}
      </div>
    </div>,
    document.getElementById("root")
  );
};

export default Modal;
