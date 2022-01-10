import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context } from "../context/BlogContext";

const IndexScreen = () => {
  // get value from BlogProvider using useContext function from react
  const { state, addBlogPost } = useContext(Context);

  // section 12 134 context is the way to moving information not to manage state
  // managing state are using useState
  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="Add Posts" onPress={addBlogPost} />
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
