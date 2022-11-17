import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  TextInput,
  Image,
} from "react-native";

import React, { useContext, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import GymBg from "../assets/gymBg.png";
import postRequest from "../utils/postRequest";
import { UserContext } from "../context/Context";
import { useNavigation } from "@react-navigation/native";
import ErrorMsg from "../components/ErrorMsg";
import { MaterialIcons } from "@expo/vector-icons";
const SignUpScreen = () => {
  // input refs
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [gender, setGender] = useState("Male");

  // reducer context
  const { state, dispatch } = useContext(UserContext);
  const { error } = state;

  const API = "http://192.168.68.107:4848/signup";
  const navigation = useNavigation();
  const onSubmit = async () => {
    const userValue = {
      username: userName,
      password,
      repeatPassword,
      gender,
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
        navigation.navigate("LogIn");
        dispatch({ type: "FETCH_FAIL", payload: "" });
      }
    } catch (err) {
      dispatch({ type: "FETCH_FAIL", payload: err });
    }
  };

  //  todo: displaye error message make login user set user to state context
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={{ height: 350 }} source={GymBg}></Image>
      </View>

      {/* inputs */}
      <View style={{ height: 270, justifyContent: "space-evenly" }}>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            fontWeight: "bold",
            color: "#e9c46a",
            fontStyle: "italic",
          }}
        >
          Sign Up
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
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder={"Password"}
            placeholderTextColor={"#2a9d8f"}
          />
        </View>

        <View>
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            onChangeText={(value) => {
              setRepeatPassword(value);
            }}
            placeholder={"Repeat Password"}
            placeholderTextColor={"#2a9d8f"}
          />
        </View>

        {/* dropdown */}

        <View
          style={{
            borderRadius: 4,
            borderWidth: 1,
            borderColor: "white",
            overflow: "hidden",
            width: 350,
            height: 40,
            justifyContent: "center",
          }}
        >
          <Picker
            selectedValue={gender}
            onValueChange={(value, index) => setGender(value)}
            style={{ backgroundColor: "white", height: 20 }}
          >
            <Picker.Item
              label="Male"
              value={"Male"}
              style={{ color: "#2a9d8f" }}
            />
            <Picker.Item
              label="Female"
              value={"Female"}
              style={{ color: "#2a9d8f" }}
            />
          </Picker>
        </View>
        {/* error msg */}
        <ErrorMsg error={error} />

        {/* already have an acc? */}
        <Pressable
          onPress={() => navigation.navigate("LogIn")}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "#e9c46a",
              fontSize: 11,
              fontWeight: "bold",
              fontStyle: "italic",
            }}
          >
            Already have an account? Click here to login.
          </Text>
          <MaterialIcons
            style={{
              fontSize: 16,
              marginLeft: 3,
            }}
            name="logout"
            size={25}
            color="#e9c46a"
          />
        </Pressable>

        {/* btn */}
      </View>
      <Pressable
        disabled={
          password.length <= 0 ||
          repeatPassword.length <= 0 ||
          userName.length <= 0
        }
        onPress={onSubmit}
        style={[
          styles.button,
          password.length <= 0 ||
          repeatPassword.length <= 0 ||
          userName.length <= 0
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
          Sign Up
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default SignUpScreen;

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
    marginTop: 2,
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
