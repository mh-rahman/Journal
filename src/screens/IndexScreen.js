import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import JournalContext from "../context/JournalContext";

const IndexScreen = () => {
  const { data, addJournal } = useContext(JournalContext);

  return (
    <View>
      <Text>Index Screen</Text>
      <Button title="New Journal" onPress={addJournal} />
      <FlatList
        data={data}
        keyExtractor={(journal) => journal.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create();

export default IndexScreen;
