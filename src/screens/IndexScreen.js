import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context as JournalContext } from "../context/JournalContext";
import { Feather } from "@expo/vector-icons";

const IndexScreen = ({ navigation }) => {
  const { state, getJournals, deleteJournal } = useContext(JournalContext);

  // second argument = []  implies run the useEffect only once
  // second argument = [] run whenever the index screen become the main focus
  useEffect(() => {
    getJournals();
    const listener = navigation.addListener("didFocus", () => {
      getJournals();
    });
    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(journal) => journal.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Show", { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.titleStyle}>{item.title}</Text>
                <TouchableOpacity onPress={() => deleteJournal(item.id)}>
                  <Feather style={styles.iconStyle} name="trash" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus" size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  titleStyle: {
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 24,
  },
});

export default IndexScreen;
