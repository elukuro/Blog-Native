import React, { useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");

  const { state, showBlogPost } = useContext(BlogContext);

  useEffect(() => {
    showBlogPost(id);
  }, []);

  return (
    <View>
      <Text>Show screen {id}</Text>
      <Text> {state.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;
