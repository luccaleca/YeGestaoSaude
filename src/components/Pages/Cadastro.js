import React, {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import ConfirmarSenhaInput from '../Inputs/ConfirmarSenhaInput';
import NameInput from '../Inputs/NomeInput';
import CadastroButton from '../Buttons/CadastroButton';
import TermosServico from '../TextLink/TermosServicoPrivacidade';

const { width } = Dimensions.get('window');


//firebase
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Cadastro = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  const handleRegister = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registro bem-sucedido
        const user = userCredential.user;
        console.log('Usuário registrado:', user);
        // Aqui você pode redirecionar o usuário ou realizar outras ações necessárias
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Erro ao registrar usuário:', errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <NameInput style={styles.input} />
        <EmailInput setEmail={setEmail} style={styles.input} />
        <SenhaInput setPassword={setPassword} style={styles.input} />
        <ConfirmarSenhaInput style={styles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TermosServico />
        <CadastroButton onPress={handleRegister} />
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
  formContainer: {
    width: width * 0.8, // 80% da largura total da tela
    marginBottom: 20,
  },
  input: {
    marginBottom: 10,
    // Adicione estilos adicionais para os inputs, se necessário
  },
  bottomContainer: {
    width: width * 0.8, // 80% da largura total da tela
    alignItems: 'center',
  },
});

export default Cadastro;
