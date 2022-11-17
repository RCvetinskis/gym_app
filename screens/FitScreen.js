import { StyleSheet, Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useContext, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FitnessItems } from "../context/Context";

const FitScreen = () => {
  const route = useRoute();
  const exercises = route.params.exercises;
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const currentExercise = exercises[index];

  //   context states
  const {
    workout,
    setWorkout,
    completed,
    setCompleted,
    minutes,
    setMinutes,
    calories,
    setCalories,
  } = useContext(FitnessItems);
  console.log(completed);
  return (
    <SafeAreaView>
      <Image
        style={{ width: "100%", height: 350 }}
        source={{ uri: currentExercise.image }}
      />
      <Text
        style={{
          color: "#e9c46a",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        {currentExercise.name}
      </Text>
      <Text
        style={{
          color: "#e9c46a",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: 38,
          fontWeight: "bold",
        }}
      >
        x{currentExercise.sets}
      </Text>

      {/* done  btn */}
      {index + 1 >= exercises.length ? (
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={{
            backgroundColor: "#264653",
            marginTop: 30,
            borderRadius: 8,
            padding: 10,
            width: 150,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "#e9c46a",
            }}
          >
            Done
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={() => {
            navigation.navigate("Rest");
            setCompleted([...completed, currentExercise.name]);
            setWorkout(workout + 1);
            setMinutes(minutes + 2.5);
            setCalories(calories + 6.3);
            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "#264653",
            marginTop: 30,
            borderRadius: 8,
            padding: 10,
            width: 150,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "#e9c46a",
            }}
          >
            Done
          </Text>
        </Pressable>
      )}

      {/* prev next btns */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30,
        }}
      >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            setIndex(index - 1);
          }}
          style={{
            backgroundColor: "#e9c46a",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 22,
            width: 100,
            shadowColor: "#264653",
            shadowOffset: { width: -2, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 5,
          }}
        >
          <Text
            style={{
              color: "#264653",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            PREV
          </Text>
        </Pressable>

        {index + 1 >= exercises.length ? (
          <Pressable
            onPress={() => navigation.navigate("Home")}
            style={{
              backgroundColor: "#e9c46a",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 22,
              width: 100,
              shadowColor: "#264653",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#264653",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={() => {
              setIndex(index + 1);
            }}
            style={{
              backgroundColor: "#e9c46a",
              padding: 10,
              borderRadius: 20,
              marginHorizontal: 22,
              width: 100,
              shadowColor: "#264653",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <Text
              style={{
                color: "#264653",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              SKIP
            </Text>
          </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  );
};

export default FitScreen;

const styles = StyleSheet.create({});
