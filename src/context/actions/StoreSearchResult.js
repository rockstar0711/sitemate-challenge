import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORE_SEARCH_RES } from "../../constants/ActionTypes";

export default (searchRes) => (dispatch) => {
  AsyncStorage.setItem("searchRes", JSON.stringify(searchRes));
  dispatch({
    type: STORE_SEARCH_RES,
    payload: searchRes,
  });
};
