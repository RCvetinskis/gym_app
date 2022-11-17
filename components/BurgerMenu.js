import { StyleSheet, TouchableOpacity, Animated } from "react-native";
import React from "react";
import { EvilIcons, AntDesign } from "@expo/vector-icons";

const BurgerMenu = ({
  scaleValue,
  offSetValue,
  closeButtonOffSet,
  showMenu,
  setShowMenu,
}) => {
  return (
    <Animated.View
      style={{
        padding: 25,
        marginBottom: 3,
        transform: [
          {
            translateY: closeButtonOffSet,
          },
        ],
      }}
    >
      {/* sets value on press for transform options */}
      <TouchableOpacity
        onPress={() => {
          Animated.timing(scaleValue, {
            toValue: showMenu ? 1 : 0.88,
            duration: 300,
            useNativeDriver: true,
          }).start();

          Animated.timing(offSetValue, {
            toValue: showMenu ? 0 : 230,
            duration: 300,
            useNativeDriver: true,
          }).start();

          Animated.timing(closeButtonOffSet, {
            toValue: showMenu ? 5 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();

          setShowMenu(!showMenu);
        }}
      >
        {/* on press changes navbar icon */}
        {showMenu ? (
          <AntDesign name="close" size={40} color="#264653" />
        ) : (
          <EvilIcons name="navicon" size={40} color="#264653" />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BurgerMenu;

const styles = StyleSheet.create({});
