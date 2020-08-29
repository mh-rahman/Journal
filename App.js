import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/IndexScreen";
import ShowJournal from "./src/screens/ShowJournal";
import CreateJournal from "./src/screens/CreateJournal";
import EditJournal from "./src/screens/EditJournal";
import { Provider as JournalProvider } from "./src/context/JournalContext";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowJournal,
    Create: CreateJournal,
    Edit: EditJournal,
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
