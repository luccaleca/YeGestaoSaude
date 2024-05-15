import React from 'react';
import { View, Text } from 'react-native';
import Especialidade from '../Inputs/Especialidade';
import NomeEspecialista from '../Inputs/NomeEspecialista';
import DateInput from '../Inputs/DateInput';

const CriarAgendamento = () => {
  return (
    <View>
      <Especialidade />
      <NomeEspecialista />
      <DateInput />
    </View>
  );
};

export default CriarAgendamento;
