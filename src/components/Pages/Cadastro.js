import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import ConfirmarSenhaInput from '../Inputs/ConfirmarSenhaInput';
import NameInput from '../Inputs/NomeInput';
import CadastroButton from '../Buttons/CadastroButton';
import TermosServico from '../TextLink/TermosServicoPrivacidade';
import { registerUser } from '../../../config/firebaseRegistrarUsuario';  

const { width } = Dimensions.get('window');

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleRegister = async () => {
    if (!acceptedTerms) {
      setErrorMessage('Você deve aceitar os Termos de Serviço e as Políticas de Privacidade');
      return;
    }
    if (password !== confirmPassword || password === '' || confirmPassword === '') {
      setErrorMessage('As senhas não coincidem');
      return;
    }

    console.log('Nome:', nome); // Adicione logs para depuração
    console.log('Email:', email);

    try {
      const userCredential = await registerUser(email, password, nome);
      setModalVisible(true);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLoginPress = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  const isPasswordValid = () => {
    return password !== '' && confirmPassword !== '' && password === confirmPassword;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <View style={styles.formContainer}>
        <NameInput value={nome} onChangeText={setNome} style={styles.input} />
        <EmailInput value={email} setEmail={setEmail} style={styles.input} />
        <SenhaInput value={password} setPassword={setPassword} style={styles.input} />
        <ConfirmarSenhaInput 
          value={confirmPassword} 
          setConfirmPassword={setConfirmPassword} 
          password={password} 
          style={[styles.input, isPasswordValid() && styles.validInputContainer]}
        />
      </View>
      <View style={styles.bottomContainer}>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        <TermosServico acceptedTerms={acceptedTerms} setAcceptedTerms={setAcceptedTerms} />
        <CadastroButton onPress={handleRegister} disabled={!acceptedTerms} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Sucesso! Sua conta foi registrada com sucesso.</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Adiciona fundo branco à página
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  formContainer: {
    width: width * 0.8,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
  },
  validInputContainer: {
    borderColor: 'green', // Define a cor da borda para verde se as senhas coincidirem
    borderWidth: 1,
  },
  bottomContainer: {
    width: width * 0.8,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  modalContent: {
    backgroundColor: '#FFFFFF', 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#63987C', // Cor de fundo do botão de login
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Cadastro;
