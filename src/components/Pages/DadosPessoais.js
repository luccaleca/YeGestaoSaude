import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import SaveButton from '../Buttons/SaveButton';

const DadosPessoais = () => {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [bloodType, setBloodType] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const doc = await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').get();
        if (doc.exists) {
          const data = doc.data();
          setFullName(data.nomeCompleto || '');
          setBirthDate(data.dataNascimento || '');
          setHeight(data.altura || '');
          setWeight(data.peso || '');
          setAddress(data.enderecoCompleto || '');
          setCep(data.cep || '');
          setBloodType(data.tipoSanguineo || '');
        }
      } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleSave = async () => {
    const dadosPessoais = {
      nomeCompleto: fullName,
      dataNascimento: birthDate,
      altura: height,
      peso: weight,
      enderecoCompleto: address,
      cep: cep,
      tipoSanguineo: bloodType,
    };

    try {
      await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').set(dadosPessoais);
      console.log('Dados pessoais adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar dados pessoais:', error);
    }
  };

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
      <SaveButton onPress={handleSave} />
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
