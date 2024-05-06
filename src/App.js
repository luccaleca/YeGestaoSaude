import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import EmailInput from './components/inputs/EmailInput';
import SenhaInput from './components/inputs/SenhaInput';
import LoginButton from './components/buttons/LoginButton';


const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Login</Text>
        <EmailInput />
        <SenhaInput />
        <LoginButton style={styles.loginButton} />  
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
  loginButton: {
    marginTop: 50, // Adiciona espaçamento entre o botão e os outros componentes
  },
  content: {
    width: '80%',
  }
})

export default App;
