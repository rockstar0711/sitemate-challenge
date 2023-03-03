import { View, Text, StatusBar, StyleSheet } from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";

// import { StatusBar } from "expo-status-bar";
const SearchScreen = () => {
  return (
    <View style={styles.container}>
      
      <SearchInput />
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
