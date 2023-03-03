import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import SearchScreen from "../screens/Search";
import { navigationRef } from "./RootNavigator";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SEARCH_DETIAL_SCREEN, SEARCH_SCREEN } from "../constants/RouteNames";
import SearchResultDetailScreen from "../screens/SearchResDetail";

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <MainStack.Navigator initialRouteName={SEARCH_SCREEN}>
      <MainStack.Screen
        name={SEARCH_SCREEN}
        component={SearchScreen}
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerBlurEffect: "light",
        }}
      ></MainStack.Screen>
      <MainStack.Screen
        name={SEARCH_DETIAL_SCREEN}
        component={SearchResultDetailScreen}
        options={{
          headerTransparent: true,
          headerTitleAlign: "center",
          headerBackVisible: false,
          headerBlurEffect: "light",
        }}
      ></MainStack.Screen>
    </MainStack.Navigator>
  );
};

const AppNavContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar barStyle={"dark-content"} translucent={false} />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <MainNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default AppNavContainer;
