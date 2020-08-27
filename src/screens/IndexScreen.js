import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { Context as JournalContext, Provider } from "../context/JournalContext";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndexScreen = () => {
  const { state, addJournal, deleteJournal } = useContext(JournalContext);

  return (
    <View>
      <Button title="New Journal" onPress={addJournal} />
      <FlatList
        data={state}
        keyExtractor={(journal) => journal.title}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <TouchableOpacity onPress={() => deleteJournal(item.id)}>
                <Feather style={styles.iconStyle} name="trash" />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
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
