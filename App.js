import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import IndexScreen from "./src/screens/indexScreen";
// create context for blogContext
import { BlogProvider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);
// section 12 no 129
/**
 * props comunicates information to direct child
 * because of it we need to write a lot of code when we need to comunicate data down at multiple layer
 * but easy to setup
 */

/**
 * Context move information from a parent to some nested child
 * complicated to setup but easy to communicate from a parent to super nested child
 */

const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
