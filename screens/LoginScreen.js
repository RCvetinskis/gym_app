import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState, useContext } from "react";
import GymBg from "../assets/gymBg.png";
import { UserContext } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";
const LoginScreen = () => {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // context dipsatch
  const { state, dispatch } = useContext(UserContext);
  const { error, user } = state;
  const API = "http://192.168.68.107:4848/login";
  const onSubmit = async () => {
    const userValue = {
      username: userName,
      password,
    };

    dispatch({ type: "FETCH_REQUEST" });
    try {
      const response = await fetch(API, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userValue),
      });
      const data = await response.json();
      if (data.error) {
        dispatch({ type: "FETCH_FAIL", payload: data.message });
      } else {
        navigation.navigate("Home");
        dispatch({ type: "FETCH_FAIL", payload: "" });
        dispatch({ type: "FETCH_SUCCESS", payload: data.data });
        await AsyncStorage.setItem("user", data.user);
      }
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={{ height: 350 }} source={GymBg}></Image>
      </View>
      <View style={{ height: 200, justifyContent: "space-evenly" }}>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontWeight: "bold",
            color: "#e9c46a",
            fontStyle: "italic",
          }}
        >
          Log In
        </Text>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={(value) => {
              setUsername(value);
            }}
            placeholder={"Username"}
            placeholderTextColor={"#2a9d8f"}
          />
        </View>

        <View>
          <TextInput
            style={styles.input}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder={"Password"}
            placeholderTextColor={"#2a9d8f"}
          />
        </View>
      </View>

      <Pressable
        disabled={password.length <= 0 || userName.length <= 0}
        onPress={onSubmit}
        style={[
          styles.button,
          password.length <= 0 || userName.length <= 0
            ? { opacity: 0.2 }
            : { opacity: 1 },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#e9c46a",
            fontSize: 15,
            fontWeight: "bold",
            fontStyle: "italic",
          }}
        >
          Log In
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#264653",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    paddingVertical: 20,
  },
  button: {
    backgroundColor: "#2a9d8f",
    padding: 10,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20,
    borderRadius: 6,
    width: 200,
  },
  input: {
    width: 350,
    padding: 10,
    backgroundColor: "white",
    color: "#2a9d8f",
    borderRadius: 4,
    height: 40,
  },
});
