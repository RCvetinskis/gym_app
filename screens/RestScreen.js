import { StyleSheet, Text, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(3);

  const startTime = () => {
    setTimeout(() => {
      if (timeLeft <= 0) {
        navigation.goBack();
        clearTimeout(0);
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);
  };
  useEffect(() => {
    startTime();
    //   clean up
    return () => clearTimeout(0);
  });
  return (
    <SafeAreaView>
      <Image
        source={{
          uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
        }}
        style={{ width: "100%", height: 420 }}
      />
      <Text
        style={{
          color: "#264653",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        TAKE A BREAK!
      </Text>
      <Text
        style={{
          color: "#264653",
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 50,
          textAlign: "center",
        }}
      >
        {timeLeft}
      </Text>
    </SafeAreaView>
  );
};

export default RestScreen;

const styles = StyleSheet.create({});
