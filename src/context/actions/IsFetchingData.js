import { IS_FETCHING } from "../../constants/ActionTypes";

export default (isFetching) => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
    payload: isFetching,
  });
};
