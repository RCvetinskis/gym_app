import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

const ToolBar = () => {
  const [currentTab, setCurrentTab] = useState("Home");
  const navigation = useNavigation();
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
            uri: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
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
          Robertas Cvetinskis
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
            navigation
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ToolBar;
// for multiple buttons...
const TabButton = (currentTab, setCurrentTab, title, image, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
          // logout
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
