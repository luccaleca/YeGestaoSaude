import React from 'react';
import { View, Text } from 'react-native';
import Especialidade from '../Inputs/Especialidade';
import NomeEspecialista from '../Inputs/NomeEspecialista';
import DateInput from '../Inputs/DateInput';
import TimeInput from '../Inputs/TimeInput';
import RazaoInput from '../Inputs/RazaoInput';
import MarcarExameButton from '../Buttons/MarcarExameButton';

const CriarAgendamento = () => {
  return (
    <View>
      <NomeEspecialista />
      <Especialidade />
      <DateInput />
      <TimeInput />
      <RazaoInput />

      <MarcarExameButton />
    </View>
  );
};

export default CriarAgendamento;
