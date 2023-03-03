/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import searchResInitialStates from "./initialStates/searchResInitialStates";
import searchRes from "./reducers/searchRes";
import { STORE_SEARCH_RES } from "../constants/ActionTypes";

export const SearchResContext = createContext({});

const ResultProvider = ({ children }) => {
  const [searchResState, searchResDispatch] = useReducer(
    searchRes,
    searchResInitialStates
  );

  const getSearchResData = async () => {
    try {
      const storedSearchResData = await AsyncStorage.getItem("searchRes");
      searchResDispatch({
        type: STORE_SEARCH_RES,
        payload:
          storedSearchResData !== null
            ? JSON.parse(storedSearchResData)
            : searchResInitialStates,
      });
    } catch (error) {}
  };
  useEffect(() => {
    getSearchResData();
  }, []);

  return (
    <SearchResContext.Provider
      value={{
        searchResState,
        searchResDispatch,
      }}
    >
      {children}
    </SearchResContext.Provider>
  );
};

export default ResultProvider;

export const useSearchResult = () => useContext(SearchResContext);
