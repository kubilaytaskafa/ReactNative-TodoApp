import { StyleSheet, Text, View, TextInput, Button, Modal } from "react-native";
import React, { useState } from "react";

export default function TodoInput({
  onAddTodo,
  isVisible,
  onChangeModalVisible,
}) {
  const [enteredTodos, setEnteredTodos] = useState("");

  function todoInputHandler() {
    onAddTodo(enteredTodos);
    setEnteredTodos("");
    onChangeModalVisible(false); // Modal'ı kapat
  }

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <TextInput
          style={styles.todoInput}
          placeholder="Add a new todo"
          placeholderTextColor="#a090b0" // Placeholder rengini de düzelttim görünmesi için
          value={enteredTodos}
          onChangeText={setEnteredTodos}
        />

        {/* DÜZELTME: Butonları kapsayan View'i (buttonContainer) buraya ekledik */}
        <View style={styles.buttonContainer}>
          {/* İptal Butonu */}
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={() => onChangeModalVisible(false)}
              color="#f31282" // Opsiyonel: İptal butonu rengi (iOS/Android fark edebilir)
            />
          </View>

          {/* Ekle Butonu */}
          <View style={styles.button}>
            <Button
              title="Add Todo"
              onPress={todoInputHandler}
              color="#b180f0" // Opsiyonel: Ekle butonu rengi
            />
          </View>
        </View>
        {/* buttonContainer kapanışı */}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  todoInput: {
    width: "100%",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e4d0ff",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row", // Butonları yan yana dizer
    marginTop: 16,
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
});
