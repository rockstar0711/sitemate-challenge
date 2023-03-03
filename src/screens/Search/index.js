import { View, Text, StatusBar, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import { APP_API_URL } from "../../config";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput />
      {/* Search results go here */}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
