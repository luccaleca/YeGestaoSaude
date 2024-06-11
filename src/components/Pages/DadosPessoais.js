import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import inserirDadosPessoais from '../../../config/Inserir/InserirDados_Pessoais'; // Importe a função inserirDadosPessoais
import SaveButton from '../Buttons/SaveButton';

const DadosPessoais = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [sexo, setSexo] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoSanguineo, setTipoSanguineo] = useState('');

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
    };

    try {
      await inserirDadosPessoais(userId, dadosPessoais); // Chame a função inserirDadosPessoais com os dados do usuário
      console.log('Dados pessoais adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar dados pessoais:', error);
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
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
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

      <SaveButton onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
