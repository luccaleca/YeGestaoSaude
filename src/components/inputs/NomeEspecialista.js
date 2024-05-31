import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const NomeEspecialista = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do médico"
        value={value}
        onChangeText={onChangeText}
        keyboardType="default"
        autoCapitalize="none"
        autoCompleteType="name"
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
    paddingLeft: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default NomeEspecialista;
