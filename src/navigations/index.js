import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import SearchScreen from "../screens/Search";
import { navigationRef } from "./RootNavigator";

const AppNavContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={"dark-content"} translucent={false} />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <SearchScreen />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavContainer;
