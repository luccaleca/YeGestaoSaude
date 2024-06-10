import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import IrLoginButton from '../Buttons/IrLoginButton';
import IrCadastroButton from '../Buttons/IrCadastroButton';

const Inicial = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/LogoInvertido.png')} style={styles.logo} />
      <Text style={styles.title}>Vamos começar!</Text>
      <Text style={styles.subtitle}>Faça o cadastro e aproveite todas as funcionalidades que temos, e fique com saúde!</Text>
      <IrLoginButton />
      <IrCadastroButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20,
  },
  logo: {
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#6E8A78',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Inicial;
