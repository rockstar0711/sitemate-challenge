import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "../../components/Shared/Icon";
import { useNavigation } from "@react-navigation/native";

const SearchResultDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  useEffect(() => {
    console.log(route.params.data);
  }, []);

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 12 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          backgroundColor: "#aaaaaa",
          width: 35,
          height: 35,
          borderRadius: 17.5,
          marginRight: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type="fontisto" name="arrow-left" size={17} color={"white"} />
      </TouchableOpacity>
      <Text>SearchResultDetailScreen</Text>
    </View>
  );
};

export default SearchResultDetailScreen;
