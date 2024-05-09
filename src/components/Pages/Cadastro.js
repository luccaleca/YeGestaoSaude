import React from 'react';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';

import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import ConfirmarSenhaInput from '../Inputs/ConfirmarSenhaInput';
import NameInput from '../Inputs/NomeInput';
import CadastroButton from '../Buttons/CadastroButton';
import TermosServico from '../TextLink/TermosServicoPrivacidade';

const { width } = Dimensions.get('window');

const Cadastro = () => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <NameInput style={styles.input} />
        <EmailInput style={styles.input} />
        <SenhaInput style={styles.input} />
        <ConfirmarSenhaInput style={styles.input} />
      </View>
      <View style={styles.bottomContainer}>
        <TermosServico />
        <CadastroButton />
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
