import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import LoginButton from '../Buttons/LoginButton';

import CadastrarText from '../TextLink/CadastrarText';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputsContainer}>
        <EmailInput style={styles.input} />
        <SenhaInput style={styles.input} />
      </View>
      <View style={styles.buttonsContainer}>
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
});

export default Login;
