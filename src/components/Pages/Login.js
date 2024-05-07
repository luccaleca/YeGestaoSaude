import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import LoginButton from '../Buttons/LoginButton';

import CadastrarText from '../TextLink/CadastrarText';

const Login = ({ navigation }) => {
  // Função para lidar com o pressionamento do botão login
  const handleLoginPress = () => {
    navigation.navigate('Home');
  };

  // Função para lidar com o pressionamento do botão Cadastre-se
  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <EmailInput />
      <SenhaInput />
      {/* Passa a função handleCadastroPress como prop onPress para o componente CadastrarText */}
      <CadastrarText onPress={handleCadastroPress} />
      {/* Passa a função handleLoginPress como prop onPress para o componente LoginButton */}
      <LoginButton onPress={handleLoginPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default Login;
