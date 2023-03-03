import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";
import { useSearchResult } from "../../context/ResultProvider";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const { searchResState } = useSearchResult();
  const renderItem = ({ item, index }) => {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content,
    } = item;
    return (
      <View>
        <Text>{author}</Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {searchResState.isFetching ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <>
          <SearchInput />
          {/* Search results go here */}

          {searchResState.searchRes.length > 0 ? (
            <ScrollView>
              <FlatList
                scrollEnabled={true}
                data={searchResState.searchRes}
                renderItem={renderItem}
                contentContainerStyle={{}}
                style={{}}
                keyExtractor={() => {
                  return (
                    new Date().getTime().toString() +
                    Math.floor(
                      Math.random() * Math.floor(new Date().getTime())
                    ).toString()
                  );
                }}
              />
              <Text>{JSON.stringify(searchResState.searchRes, 1, 2)}</Text>
            </ScrollView>
          ) : (
            <Text>No result</Text>
          )}
        </>
      )}
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  loadingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
