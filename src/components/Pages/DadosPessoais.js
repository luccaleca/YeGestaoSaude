import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const DadosPessoais = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [height, setHeight] = useState('');
  const [bloodType, setBloodType] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={fullName}
        onChangeText={setFullName}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={birthDate}
        onChangeText={setBirthDate}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço Completo"
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo Sanguíneo"
        value={bloodType}
        onChangeText={setBloodType}
        keyboardType="default"
      />
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

export default DadosPessoais;
