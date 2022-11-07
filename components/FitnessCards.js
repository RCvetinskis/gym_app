import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const FitnessCards = () => {
  const fitnessData = fitness;
  const navigation = useNavigation();
  return (
    <View>
      {fitnessData.map((item) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Workout", {
              image: item.image,
              exercises: item.exercises,
              id: item.id,
            })
          }
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: 10,
          }}
          key={item.id}
        >
          <Image
            style={{ width: "95%", height: 140, borderRadius: 8 }}
            source={{
              uri: item.image,
            }}
          />
          <Text
            style={{
              position: "absolute",
              color: "white",
              fontSize: 16,
              fontWeight: "bold",
              left: 20,
              top: 20,
              color: "#e9c46a",
            }}
          >
            {item.name}
          </Text>
          <MaterialCommunityIcons
            style={{
              position: "absolute",
              color: "#e9c46a",
              button: 15,
              left: 20,
            }}
            name="lightning-bolt"
            size={24}
            color={"#e9c46a"}
          />
        </Pressable>
      ))}
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
