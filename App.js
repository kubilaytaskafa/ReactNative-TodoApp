import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodoHandler(todo) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { title: todo, id: Date.now().toString() },
    ]);
  }

  function deleteTodoHandler(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 My Todos</Text>

      <TodoInput onAddTodo={addTodoHandler} />

      <View style={styles.listContainer}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Pressable
              android_ripple={{ color: "red" }}
              onPress={() => deleteTodoHandler(item.id)}
              style={({ pressed }) => [
                styles.todoItem,
                pressed && styles.pressedItem,
              ]}
            >
              <Text style={styles.todoText}>{item.title}</Text>
            </Pressable>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 60,
    paddingHorizontal: 16,
  },

  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },

  listContainer: {
    flex: 1,
    marginTop: 10,
  },

  todoItem: {
    backgroundColor: "#505050",
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },

  pressedItem: {
    opacity: 0.6,
  },

  todoText: {
    color: "white",
    fontSize: 16,
    padding: 10,
  },
});
