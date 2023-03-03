import { IS_FETCHING, STORE_SEARCH_RES } from "../../constants/ActionTypes";

const searchRes = (state, { type, payload }) => {
  switch (type) {
    case STORE_SEARCH_RES:
      return {
        ...state,
        searchRes: payload,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: payload,
      };

    default:
      return state;
  }
};

export default searchRes;
