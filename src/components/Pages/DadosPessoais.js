import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import inserirDadosPessoais from '../../../config/Inserir/InserirDados_Pessoais';

const DadosPessoais = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchDadosPessoais = async () => {
      try {
        const doc = await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').get();
        if (doc.exists) {
          const data = doc.data();
          setNome(data.nome || '');
          setEmail(data.email || '');
          setDataNascimento(data.dataNascimento || '');
          setSexo(data.sexo || '');
          setEndereco(data.endereco || '');
          setTelefone(data.telefone || '');
          setTipoSanguineo(data.tipoSanguineo || '');
          setPeso(data.peso || '');
          setAltura(data.altura || '');
        }
      } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
      }
    };

    if (userId) {
      fetchDadosPessoais();
    }
  }, [userId]);

  const handleSave = async () => {
    const dadosPessoais = {
      nome,
      email,
      dataNascimento,
      sexo,
      endereco,
      telefone,
      tipoSanguineo,
      peso,
      altura,
    };

    try {
      await inserirDadosPessoais(userId, dadosPessoais);
      Alert.alert('Sucesso', 'Dados pessoais adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar dados pessoais:', error);
      Alert.alert('Erro', 'Não foi possível adicionar os dados pessoais');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dados Pessoais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={nome}
        onChangeText={setNome}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChangeText={setDataNascimento}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={sexo}
        onChangeText={setSexo}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={telefone}
        onChangeText={setTelefone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo Sanguíneo"
        value={tipoSanguineo}
        onChangeText={setTipoSanguineo}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Altura (m)"
        value={altura}
        onChangeText={setAltura}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#199A8E',
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#199A8E',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#E8F3F1',
  },
  saveButton: {
    backgroundColor: '#199A8E',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DadosPessoais;
