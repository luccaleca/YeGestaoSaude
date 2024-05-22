import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const Medicamentos = () => {
  const [currentMedications, setCurrentMedications] = useState('');
  const [pastMedications, setPastMedications] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicamentos</Text>
      <Text>Os medicamentos que você faz uso e sua reação são muito importantes para o especialista.</Text>
      <TextInput
        style={[styles.input, styles.wideInput]}
        placeholder="Medicamentos que faz uso atualmente"
        value={currentMedications}
        onChangeText={setCurrentMedications}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: diariamente eu tomo medicação para pressão alta.</Text>
      <TextInput
        style={[styles.input, styles.wideInput]}
        placeholder="Medicamentos utilizados no passado"
        value={pastMedications}
        onChangeText={setPastMedications}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: eu tomei antibióticos por duas semanas no ano passado.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop:10,
  },
  wideInput: {
    height: 100, // Ajuste a altura conforme necessário
  },
});

export default Medicamentos;
