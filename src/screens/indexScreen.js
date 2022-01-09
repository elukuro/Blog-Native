import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  // get value from BlogProvider using useContext function from react
  const value = useContext(BlogContext);
  return (
    <View>
      <Text>test {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
