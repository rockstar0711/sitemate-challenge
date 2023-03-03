import { View } from "react-native";
import React, { useState } from "react";
import { APP_API_KEY } from "../../config";
import { TextInput } from "react-native-gesture-handler";
import { Button } from "react-native-elements";
import callApi from "../../helpers/callApi";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const fetchNews = async () => {
    console.log(searchQuery);
    await callApi
      .get(
        `?q=${searchQuery}&from=2023-03-03&sortBy=popularity&apiKey=${APP_API_KEY}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View>
      <TextInput
        style={{ backgroundColor: "#aeaeae" }}
        onChangeText={(v) => setSearchQuery(v)}
        value={searchQuery}
      />
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
  );
};

export default SearchInput;
