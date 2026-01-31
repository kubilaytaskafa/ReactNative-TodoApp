import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
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

  function handleModalVisible(value) {
    setModalIsVisible(value);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📝 My Todos</Text>
      <Button title="Add Todo" onPress={() => handleModalVisible(true)} />
      {modalIsVisible && (
        <TodoInput
          onAddTodo={addTodoHandler}
          isVisible={modalIsVisible}
          onChangeModalVisible={handleModalVisible}
        />
      )}

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
    flexDirection: "row",
    justifyContent: "space-between",
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
