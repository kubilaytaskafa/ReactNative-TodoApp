import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

import { useState } from "react";

export default function TodoInput({ onAddTodo }) {
  const [enteredTodos, setEnteredTodos] = useState("");

  function todoInputHandler(enteredText) {
    onAddTodo(enteredText);
    setEnteredTodos("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.todoInput}
        placeholder="Add a new todo"
        value={enteredTodos}
        onChangeText={setEnteredTodos}
      />
      <Button title="Add Todo" onPress={() => todoInputHandler(enteredTodos)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  todoInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "70%",
    borderRadius: 6,
    padding: 6,
  },
});
