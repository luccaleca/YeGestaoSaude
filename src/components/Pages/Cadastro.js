import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import EmailInput from '../Inputs/EmailInput';
import SenhaInput from '../Inputs/SenhaInput';
import ComfirmarSenhaInput from '../Inputs/ConfirmarSenhaInput';
import NameInput from '../Inputs/NomeInput';
import CadastroButton from '../Buttons/CadastroButton';



const Cadastro = () => {
  return (
   
    <View>
      <NameInput />
      <EmailInput />
      <SenhaInput />
      <ComfirmarSenhaInput />
      <CadastroButton />

    </View>
  );
};



export default Cadastro;