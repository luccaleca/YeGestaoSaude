import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import LoginButton from '../Buttons/LoginButton';
import CadastrarText from '../TextLink/CadastrarText';
import EsqueciMinhaSenhaText from '../TextLink/EsqueceuSenhaText';
import DividerWithText from '../Bars/DivisoriaOu';

import { firebaseAuth } from '../../../config/firebaseConfig';
import DivisoriaOu from '../Bars/DivisoriaOu';

const { width } = Dimensions.get('window');

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoginPress = async () => {
    try {
      const userCredential = await firebaseAuth.signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Usuário logado:', user);

      // Passe diretamente o nome para o menu
      navigation.navigate('Menu', { userId: user.uid });
    } catch (error) {
      const errorMessage = error.message;
      console.error('Erro ao fazer login:', errorMessage);
      setErrorMessage(errorMessage);
    }
  };

  const handleCadastroPress = () => {
    navigation.navigate('Cadastro');
  };

  const handleEsqueciMinhaSenhaPress = () => {
    navigation.navigate('EsqueciSenha');
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Inicial')}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Login</Text>
        <View style={styles.inputsContainer}>
          <EmailInput setEmail={setEmail} style={styles.input} />
          <SenhaInput setPassword={setPassword} style={styles.input} />
          <View style={styles.forgotPasswordContainer}>
            <EsqueciMinhaSenhaText onPress={handleEsqueciMinhaSenhaPress} />
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
          <LoginButton onPress={handleLoginPress} />
          <View style={styles.cadastrarContainer}>
            <CadastrarText onPress={handleCadastroPress} />
          </View>
          <DivisoriaOu text="ou" />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 150, // Ajuste este valor para mover os componentes para baixo
    position: 'relative',
    top: -140,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
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
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    width: '100%',
    marginTop: -10,
  },
  input: {
    // Adicione estilos adicionais para os inputs, se necessário
  },
  buttonsContainer: {
    width: width * 0.8,
  },
  cadastrarContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Login;
