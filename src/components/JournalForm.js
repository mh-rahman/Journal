import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";

const JournalForm = ({ labels, initialValues, onSubmit }) => {
  // const { state, editJournal } = useContext(JournalContext);
  // const journal = state.find(
  //   (journal) => journal.id == navigation.getParam("id")
  // );

  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.label}>{labels.title}:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <Text style={styles.label}>{labels.content}:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={setContent}
      />
      <Button title={"Save Journal"} onPress={() => onSubmit(title, content)} />
    </View>
  );
};

JournalForm.defaultProps = {
  initialValues: { title: "", content: "" },
};

const styles = StyleSheet.create({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    marginBottom: 5,
    marginLeft: 5,
  },
});

export default JournalForm;
