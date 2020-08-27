import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import { JournalProvider } from "./src/context/JournalContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      // This will be later be modified to be dynamic dependig on the page we are currently on
      title: "Journals",
    },
  }
);

// export default createAppContainer(navigator);
const App = createAppContainer(navigator);

export default () => {
  return (
    <JournalProvider>
      <App />
    </JournalProvider>
  );
};
