import { StyleSheet, SafeAreaView, Animated } from "react-native";
import React, { useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import FitScreen from "./screens/FitScreen";
import RestScreen from "./screens/RestScreen";
import BurgerMenu from "./components/BurgerMenu";
import ToolBar from "./components/ToolBar";
import SettingsScreen from "./screens/SettingsScreen";
import AllWorkoutsScreen from "./screens/AllWorkoutsScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoginScreen from "./screens/LoginScreen";
const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  const [showMenu, setShowMenu] = useState(false);

  // animated properties
  const offSetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffSet = useRef(new Animated.Value(0)).current;
  return (
    <NavigationContainer>
      {/* login signup */}

      <Stack.Navigator>
        <Stack.Screen
          name="SignUp"
          initialRouteName={"SignUp"}
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

      {/* <ToolBar />
      <Animated.View
        style={{
          flexGrow: 1,
          position: "absolute",
          backgroundColor: "white",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          paddingVertical: 20,
          borderRadius: showMenu ? 20 : 0,
          // transforming view
          transform: [{ scale: scaleValue }, { translateX: offSetValue }],
        }}
      >
        <BurgerMenu
          scaleValue={scaleValue}
          offSetValue={offSetValue}
          closeButtonOffSet={closeButtonOffSet}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Workout"
            component={WorkoutScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Fit"
            component={FitScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Rest"
            component={RestScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Workouts"
            component={AllWorkoutsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </Animated.View> */}
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
