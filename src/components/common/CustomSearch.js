import React, { useEffect, useRef, useState } from "react";
import "../../styles/common/CustomSearch.css";
import searchInfoAction from "../../redux/actions/searchInfoAction";
import { useDispatch } from "react-redux";

const CustomSearch = (props) => {
  const locationRef = useRef();
  const guestRef = useRef();

  const [inputText, setInputText] = useState();

  const dispatch = useDispatch();

  const minWidth = window.matchMedia("(max-width: 600px)");

  const handleInputText = (e) => setInputText(e.target.value);

  const handleSearch = () => {
    dispatch(
      searchInfoAction({
        location: inputText,
        guests: props.counter,
      })
    );

    props.handleClose();
  };

  useEffect(() => {
    if (props.modalState === "location") locationRef.current.focus();
    else if (props.modalState === "guest") guestRef.current.focus();
    else locationRef.current.focus();
  }, [props.modalState]);

  useEffect(() => {
    setInputText(props.locationInfo);
  }, [props.locationInfo]);

  return (
    <>
      {!minWidth.matches ? (
        <div className="custom-search">
          <div
            className="custom-btn-container"
            onClick={() => props.handleModalState("location")}
          >
            <button ref={locationRef} className="custom-location">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                placeholder="Add location"
                onKeyUp={props.handleLocationChange}
                onChange={handleInputText}
                value={inputText || ""}
              />
            </button>
          </div>
          <div
            className="custom-btn-container"
            onClick={() => props.handleModalState("guest")}
          >
            <button ref={guestRef} className="custom-guests">
              <label htmlFor="guests">guests</label>
              <div className="guest-number">{props.counter} guests</div>
            </button>
          </div>
          <div className="custom-btn-container">
            <div className="custom-find">
              <button className="custom-find-btn" onClick={handleSearch}>
                <span className="material-icons">search</span>
                <div className="custom-btn-text">Search</div>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="custom-search">
            <div
              className="custom-btn-container"
              onClick={() => props.handleModalState("location")}
            >
              <button ref={locationRef} className="custom-location">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Add location"
                  onKeyUp={props.handleLocationChange}
                  onChange={handleInputText}
                  value={inputText || ""}
                />
              </button>
            </div>
            <div
              className="custom-btn-container"
              onClick={() => props.handleModalState("guest")}
            >
              <button ref={guestRef} className="custom-guests">
                <label htmlFor="guests">guests</label>
                <div className="guest-number">{props.counter} guests</div>
              </button>
            </div>
          </div>
          <div className="custom-find">
            <button className="custom-find-btn" onClick={handleSearch}>
              <span className="material-icons">search</span>
              <div className="custom-btn-text">Search</div>
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default React.memo(CustomSearch);
