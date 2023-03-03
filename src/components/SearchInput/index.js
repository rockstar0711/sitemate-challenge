import { View } from "react-native";
import React, { useState } from "react";
import { APP_API_KEY } from "../../config";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import callApi from "../../helpers/callApi";
import StoreSearchResult from "../../context/actions/StoreSearchResult";
import { useSearchResult } from "../../context/ResultProvider";
import IsFetchingData from "../../context/actions/IsFetchingData";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { searchResDispatch } = useSearchResult();

  const fetchNews = async () => {
    console.log(searchQuery);
    IsFetchingData(true)(searchResDispatch);
    await callApi
      .get(
        `?q=${searchQuery}&from=2023-02-03&sortBy=popularity&apiKey=${APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.articles);
        StoreSearchResult(res.data.articles)(searchResDispatch);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
    IsFetchingData(false)(searchResDispatch);
  };

  return (
    <View style={{ paddingTop: 20 }}>
      <TextInput
        style={{ backgroundColor: "#f3f3f3", padding: 20, borderRadius: 10 }}
        onChangeText={(v) => setSearchQuery(v)}
        value={searchQuery}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          marginVertical: 15,
        }}
      >
        <Button
          title={"Search"}
          titleStyle={{ fontSize: 14 }}
          buttonStyle={{
            backgroundColor: "#434343",
            borderRadius: 22,
            height: 44,
            width: 100,
          }}
          style={{ marginTop: 0 }}
          onPress={() => {
            fetchNews();
          }}
        />
      </View>
    </View>
  );
};

export default SearchInput;
