import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const Especialidade = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite a especialidade"
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Especialidade;
