// Cadastro.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Modal, TouchableOpacity } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import ConfirmarSenhaInput from '../Inputs/ConfirmarSenhaInput';
import NameInput from '../Inputs/NomeInput';
import CadastroButton from '../Buttons/CadastroButton';
import TermosServico from '../TextLink/TermosServicoPrivacidade';

const { width } = Dimensions.get('window');

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('As senhas não coincidem');
      return;
    }
  };

  const handleLoginPress = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <NameInput value={nome} onChangeText={setNome} style={styles.input} />
        <EmailInput setEmail={setEmail} style={styles.input} />
        <SenhaInput setPassword={setPassword} style={styles.input} />
        <ConfirmarSenhaInput setConfirmPassword={setConfirmPassword} style={styles.input} />
      </View>
      <View style={styles.bottomContainer}>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        <TermosServico />
        <CadastroButton onPress={handleRegister} />
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
  },
  formContainer: {
    width: width * 0.8,
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
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
    backgroundColor: '#007AFF',
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
