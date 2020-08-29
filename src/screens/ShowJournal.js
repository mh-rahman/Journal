import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context as JournalContext } from "../context/JournalContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowJournal = ({ navigation }) => {
  const { state } = useContext(JournalContext);

  const journal = state.find(
    (journal) => journal.id == navigation.getParam("id")
  );

  return (
    <View>
      <Text>{journal.title}</Text>
      <Text>{journal.content}</Text>
    </View>
  );
};

ShowJournal.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <EvilIcons style={styles.iconStyle} name="pencil" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
  },
});

export default ShowJournal;
