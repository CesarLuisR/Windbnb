import { GET } from "../consts";

const searchInfoReducer = (state = {}, action) => {
  switch (action.type) {
    case GET:
      return { data: action.payload };
    
    default:
      return state;
  }
}

export default searchInfoReducer;