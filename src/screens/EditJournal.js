import React, { useContext } from "react";
// import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import { Context as JournalContext } from "../context/JournalContext";
import JournalForm from "../components/JournalForm";

const EditJournal = ({ navigation }) => {
  const id = navigation.getParam("id");
  const { state, editJournal } = useContext(JournalContext);
  const journal = state.find((journal) => journal.id === id);

  return (
    <JournalForm
      labels={{ title: "Edit Title", content: "Edit Content" }}
      initialValues={{ title: journal.title, content: journal.content }}
      onSubmit={(title, content) =>
        editJournal(id, title, content, () => {
          navigation.pop();
        })
      }
    />
  );
};

// const styles = StyleSheet.create({});

export default EditJournal;
