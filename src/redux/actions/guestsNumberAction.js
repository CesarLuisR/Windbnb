import { GET_PLUS_NUMBERS, GET_REDUCE_NUMBERS } from "../consts";

const guestsNumberAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: data.type === "plus" ? GET_PLUS_NUMBERS : GET_REDUCE_NUMBERS,
      payload: data,
    });
  };
};

export default guestsNumberAction;
