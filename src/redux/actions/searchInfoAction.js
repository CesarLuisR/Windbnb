import { GET } from "../consts";

const searchInfoAction = (data) => {
  return (dispatch) => {
    dispatch({
      type: GET,
      payload: data
    })
  }
}

export default searchInfoAction;
