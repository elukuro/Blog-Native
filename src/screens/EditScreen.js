import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { Context as BlogContext } from "../context/BlogContext";

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );
  const [title, setTitle] = useState(blogPost.title);
  const [content, setContent] = useState(blogPost.content);
  return (
    <View>
      <Text>Edit title</Text>
      <TextInput
        value={title}
        style={styles.input}
        onChangeText={(newTitle) => setTitle(newTitle)}
      />
      <Text>Edit content</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newContent) => setContent(newContent)}
      />
      <Button title="Add blog Post" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 24,
    padding: 10,
    borderColor: "black",
  },
});

export default EditScreen;
