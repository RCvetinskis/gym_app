import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useContext } from "react";
import FitnessCards from "../components/FitnessCards";
import { UserContext } from "../context/Context";

const HomeScreen = () => {
  const { workout, minutes, calories } = useContext(UserContext);
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View
        style={{
          backgroundColor: "#264653",
          padding: 10,
          height: 200,
          width: "100%",
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
            color: "#e9c46a",
          }}
        >
          ROBKE WORKOUT
        </Text>
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
        >
          {/* kcal text */}
          <View>
            <Text style={[styles.setNumbersStyle]}>{workout}</Text>
            <Text style={[styles.setTrakingNameStyle]}>WORKOUTS</Text>
          </View>
          <View>
            <Text style={[styles.setNumbersStyle]}>{Math.round(calories)}</Text>
            <Text style={[styles.setTrakingNameStyle]}>KCAL</Text>
          </View>
          <View>
            <Text style={[styles.setNumbersStyle]}>{Math.round(minutes)}</Text>
            <Text style={[styles.setTrakingNameStyle]}>MINS</Text>
          </View>
        </View>

        {/* image style */}
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: "90%",
              height: 120,
              marginTop: 20,
              borderRadius: 8,
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          />
        </View>
      </View>
      <FitnessCards />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  setNumbersStyle: {
    color: "#f4a261",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  setTrakingNameStyle: {
    fontSize: 17,
    marginTop: 6,
    color: "#e9c46a",
    fontWeight: "bold",
  },
});
