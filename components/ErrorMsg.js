import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ErrorMsg = ({ error }) => {
  return (
    <View>
      <Text style={styles.danger}>{error}</Text>
    </View>
  );
};

export default ErrorMsg;

const styles = StyleSheet.create({
  danger: {
    color: "red",
    fontweight: "bold",
    textAlign: "center",
    fontStyle: "italic",
  },
});
