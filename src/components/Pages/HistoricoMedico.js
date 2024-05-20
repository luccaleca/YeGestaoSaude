import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const HistoricoMedico = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [bmi, setBmi] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [familyDiseases, setFamilyDiseases] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico Médico</Text>
      <TextInput
        style={styles.input}
        placeholder="Última Aferição da Pressão"
        value={bloodPressure}
        onChangeText={setBloodPressure}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Última Aferição de Glicemia"
        value={glucoseLevel}
        onChangeText={setGlucoseLevel}
        keyboardType="numeric"
      />
      <Text>O IMC vai calcular o resultado automaticamente usando sua massa/altura</Text>
      <TextInput
        style={styles.input}
        placeholder="IMC"
        value={bmi}
        onChangeText={setBmi}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Doenças Passadas e Crônicas"
        value={medicalHistory}
        onChangeText={setMedicalHistory}
        keyboardType="default"
        multiline
        textAlignVertical="top" // Texto do placeholder no começo
      />
      <Text>Exemplo: estou há duas semanas com dores no estômago</Text>

      {/* Input para doenças graves em família */}
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Doenças Graves em sua Família"
        value={familyDiseases}
        onChangeText={setFamilyDiseases}
        keyboardType="default"
        multiline
        textAlignVertical="top" // Texto do placeholder no começo
      />
      <Text>Exemplo: minha avó teve câncer de mama e meu pai é diabético.</Text>
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default HistoricoMedico;
