import React, { useState, useEffect } from "react";
import "../../styles/common/GuestCounter.css";
import { useSelector, useDispatch } from "react-redux";
import guestsNumberAction from "../../redux/actions/guestsNumberAction";

const GuestCounter = (props) => {
  const [counter, setCounter] = useState(0);
  const dispatch = useDispatch();
  const data = useSelector((store) => store.guestsNumberReducer);

  const handleIncreaseCounter = () => {
    if (counter === props.maxCounter) return;

    setCounter(counter + 1);
    props.handleCounter("increase");

    dispatch(
      guestsNumberAction({
        name: props.title,
        data: counter,
        type: "plus",
      })
    );
  };

  const handleDecreaseCounter = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
    props.handleCounter("decrease");
    dispatch(guestsNumberAction({ name: props.title, data: counter }));
  };

  useEffect(() => {
    if (props.title === "Adults") setCounter(data?.Adults?.Adults || 0);
    else setCounter(data?.Children?.Children || 0);
  }, [props, data]);

  return (
    <div className="guest-counter">
      <div className="guest-counter__title">{props.title}</div>
      <div className="guest-counter__subtitle">{props.subtitle}</div>
      <div className="counter">
        <button className="counter-btn" onClick={handleDecreaseCounter}>
          -
        </button>
        <div className="counter-value">{counter}</div>
        <button className="counter-btn" onClick={handleIncreaseCounter}>
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
