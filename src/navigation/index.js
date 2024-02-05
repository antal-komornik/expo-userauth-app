import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { NativeBaseProvider, Box } from "native-base";
import "react-native-gesture-handler";

import HomeScreen from "../pages/HomeScreen";
import UserAuthScreen from "../pages/UserAuthScreen";
import LoginScreen from "../pages/LoginScreen";
import SignupScreen from "../pages/SignupScreen";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  Center,
  Heading,
  Button,
  ScrollView,
  Text,
  Spinner,
  HStack,
  VStack
} from "native-base";
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  const { isLoading } = useContext(AuthContext);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {isLoading ? (
          <Box flex="1" justifyContent="center">
            <Center>
              <VStack space={2} justifyContent="center">
                <Spinner accessibilityLabel="Loading posts" size="xl" color="muted.900" />
                <Heading color="muted.900" fontSize="2xl">
                  Loading
                </Heading>
              </VStack>
            </Center>
          </Box>
        ) : (
          <Tab.Navigator
            screenOptions={TabNavOptions}
            initialRouteName="Home"
            activeColor="#D74207"
            inactiveColor="lightgray"
            barStyle={{ backgroundColor: "black" }}
          >
            <Tab.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                tabBarLabel: "Home",
                tabBarIconStyle: {
                  textAlignVertical: "center",
                  textAlign: "center",
                },
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="home"
                    color={focused ? "#D74207" : "lightgray"}
                    size={26}
                    style={{ textAlignVertical: "center" }}
                  />
                ),
              }}
            />

            <Tab.Screen
              name="UserAuthScreen"
              component={UserAuthScreen}
              options={{
                tabBarLabel: "UserAuth",
                tabBarIconStyle: {
                  textAlignVertical: "center",
                  textAlign: "center",
                },
                tabBarIcon: ({ focused }) => (
                  <MaterialCommunityIcons
                    name="account"
                    color={focused ? "#D74207" : "lightgray"}
                    size={26}
                    style={{ textAlignVertical: "center" }}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{
                tabBarButton: (props) => null, //like this
                // tabBarStyle: { display: "none" }, //this is additional if you want to hide the whole bottom tab from the screen version 6.x
              }}
            />
            <Tab.Screen
              name="SignupScreen"
              component={SignupScreen}
              options={{
                tabBarButton: (props) => null, //like this
                // tabBarStyle: { display: "none" }, //this is additional if you want to hide the whole bottom tab from the screen version 6.x
              }}
            />
          </Tab.Navigator>
        )}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const TabNavOptions = {
  tabBarShowLabel: false,
  tabBarActiveTintColor: "#4B7079",
  tabBarInactiveTintColor: "#FFFFFF",
  tabBarStyle: {
    width: "90%",
    height: 60,
    position: "absolute",
    left: "5%",
    bottom: 30,
    borderRadius: 100,
    borderTopWidth: 0,
    backgroundColor: "black",
  },
};
