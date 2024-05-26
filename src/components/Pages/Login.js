// Login.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import LoginButton from '../Buttons/LoginButton';
import CadastrarText from '../TextLink/CadastrarText';

import { firebaseAuth } from '../../../config/firebaseConfig';  // Importando Firebase Auth

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginPress = () => {
    firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
        console.log('Usuário logado:', user);
        navigation.navigate('Menu'); // Navegar para a tela do Menu
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error('Erro ao fazer login:', errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputsContainer}>
        <EmailInput setEmail={setEmail} style={styles.input} />
        <SenhaInput setPassword={setPassword} style={styles.input} />
      </View>
      <View style={styles.buttonsContainer}>
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        <LoginButton onPress={handleLoginPress} />
        <View style={styles.cadastrarContainer}>
          <CadastrarText onPress={handleCadastroPress} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputsContainer: {
    width: width * 0.8,
    marginBottom: 20,
  },
  input: {
    // Adicione estilos adicionais para os inputs, se necessário
  },
  buttonsContainer: {
    width: width * 0.8,
  },
  cadastrarContainer: {
    marginTop: 10, // Ajusta a distância entre o texto "Cadastrar-se" e o botão de login
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
