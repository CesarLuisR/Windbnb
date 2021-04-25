import { GET_PLUS_NUMBERS, GET_REDUCE_NUMBERS } from "../consts";

const searchInfoReducer = (state = 0, action) => {
  switch (action.type) {
    case GET_PLUS_NUMBERS:
      return {
        ...state,
        [action.payload.name]: {
          [action.payload.name]: action.payload.data + 1,
        },
      };

    case GET_REDUCE_NUMBERS:
      return {
        ...state,
        [action.payload.name]: {
          [action.payload.name]: action.payload.data - 1,
        },
      };

    default:
      return state;
  }
};

export default searchInfoReducer;
