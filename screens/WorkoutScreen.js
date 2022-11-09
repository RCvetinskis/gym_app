import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { FitnessItems } from "../context/Context";
const WorkoutScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  //   context states
  const { completed, setCompleted } = useContext(FitnessItems);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "white", marginTop: 50 }}
      >
        <Image
          style={{ width: "100%", height: 170 }}
          source={{ uri: route.params.image }}
        />
        <AntDesign
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", left: 10, top: 10 }}
          name="back"
          size={28}
          color="#e9c46a"
        />
        {/* exresises for */}
        {route.params.exercises.map((item, key) => (
          <Pressable
            style={{ margin: 10, flexDirection: "row", alignItems: "center" }}
            key={key}
          >
            <Image
              style={{ width: 90, height: 90 }}
              source={{ uri: item.image }}
            />
            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontSize: 17,
                  fontWeight: "bold",
                  color: "#e9c46a",
                  width: 170,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  marginTop: 4,
                  fontSize: 18,
                  color: "#264653",
                }}
              >
                x{item.sets}
              </Text>
            </View>
            {/* marks completed excercis */}
            {completed.includes(item.name) ? (
              <AntDesign
                style={{ marginLeft: 40 }}
                name="checkcircle"
                size={24}
                color="#264653"
              />
            ) : null}
          </Pressable>
        ))}
      </ScrollView>
      <Pressable
        onPress={() => {
          navigation.navigate("Fit", {
            exercises: route.params.exercises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "#264653",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          borderRadius: 6,
          width: 120,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#e9c46a",
            fontSize: 15,
            fontWeight: "normal",
          }}
        >
          Start
        </Text>
      </Pressable>
    </>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({});
