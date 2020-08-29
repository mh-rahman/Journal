import React, { useContext } from "react";
// import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context as JournalContext } from "../context/JournalContext";
import JournalForm from "../components/JournalForm";

const CreateJournal = ({ navigation }) => {
  const { addJournal } = useContext(JournalContext);

  return (
    <JournalForm
      labels={{ title: "Title", content: "Content" }}
      onSubmit={(title, content) =>
        addJournal(title, content, () => {
          navigation.navigate("Index");
        })
      }
    />
  );
};

// const styles = StyleSheet.create({});

export default CreateJournal;

// onPress={() =>
//   addJournal(title, content, () => {
//     navigation.navigate("Index");
//   })}
