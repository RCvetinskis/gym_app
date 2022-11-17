import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { UserContext } from "../context/Context";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ToolBar = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const navigation = useNavigation();
  const { state, dispatch } = useContext(UserContext);
  const { user } = state;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          justifyContent: "flex-start",
          padding: 15,
          marginTop: 20,
        }}
      >
        <Image
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
          }}
          source={{
            uri: user.avatar,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            color: "#e9c46a",
            marginTop: 20,
          }}
        >
          {user.username}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              marginTop: 3,
              color: "#e9c46a",
              fontSize: 12,
            }}
          >
            View Workouts
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {/* tab bar  buttons */}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Home",
            homeImage(),
            navigation
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Workouts",
            barbelImage(),
            navigation
          )}
          {TabButton(
            currentTab,
            setCurrentTab,
            "Settings",
            settingsImage(),
            navigation
          )}
        </View>
        <View>
          {TabButton(
            currentTab,
            setCurrentTab,
            "LogOut",
            logoutImage(),
            navigation,
            dispatch
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToolBar;
// for multiple buttons...
const TabButton = (
  currentTab,
  setCurrentTab,
  title,
  image,
  navigation,
  dispatch
) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          removeStorage();
          dispatch({ type: "FETCH_SUCCESS", payload: null });

          // navigation.navigate("SignUp");
        } else {
          setCurrentTab(title);
          navigation.navigate(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingLeft: 13,
          paddingRight: 40,
          backgroundColor: currentTab === title ? "#2a9d8f" : "transparent",
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        {image}
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            paddingLeft: 15,
            color: "#e9c46a",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

// removes local storage and sets state of user
const removeStorage = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    return true;
  } catch (exception) {
    return false;
  }
};

// images
const homeImage = () => {
  return <AntDesign name="home" size={25} color="#e9c46a" />;
};

const barbelImage = () => {
  return <Ionicons name="barbell" size={25} color="#e9c46a" />;
};

const settingsImage = () => {
  return <Feather name="settings" size={25} color="#e9c46a" />;
};
const logoutImage = () => {
  return <MaterialIcons name="logout" size={25} color="#e9c46a" />;
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#264653",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
