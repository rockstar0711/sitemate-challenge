import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SearchInput from "../../components/SearchInput";
import { useSearchResult } from "../../context/ResultProvider";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
import Icon from "../../components/Shared/Icon";
import { SEARCH_DETIAL_SCREEN } from "../../constants/RouteNames";
import { useNavigation } from "@react-navigation/native";

const SearchScreen = () => {
  const { searchResState } = useSearchResult();
  const navigation = useNavigation();
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

    const navToDetail = () => {
      navigation.navigate(SEARCH_DETIAL_SCREEN, { data: item });
    };
    return (
      <TouchableOpacity onPress={() => navToDetail()}>
        <View style={styles.renderItemContainer}>
          <View style={styles.renderItemTopContainer}>
            <View style={styles.dsplayFlexRow}>
              <Icon type="ant" size={21} name="user" />
              <Text>{author}</Text>
            </View>
            <Text>{moment(publishedAt).fromNow()}</Text>
          </View>
          <Text style={styles.renderItemTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
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
    paddingHorizontal: 12,
  },
  loadingContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  renderItemContainer: {
    marginVertical: 10,
    padding: 20,
    backgroundColor: "#f3f3f3",
    borderRadius: 20,
  },
  renderItemTopContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  renderItemTitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
  dsplayFlexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
