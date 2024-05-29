import React, { useState } from 'react';
import { View } from 'react-native';
import Especialidade from '../Inputs/Especialidade';
import NomeEspecialista from '../Inputs/NomeEspecialista';
import DateInput from '../Inputs/DateInput';
import TimeInput from '../Inputs/TimeInput';
import RazaoInput from '../Inputs/RazaoInput';
import MarcarExameButton from '../Buttons/MarcarExameButton';
import inserirAgendamento from '../../../config/Inserir/InserirAgendamento';
import { firebaseAuth } from '../../../config/firebaseConfig';

const CriarAgendamento = () => {
  const [nomeEspecialista, setNomeEspecialista] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [razao, setRazao] = useState('');

  const handleMarcarExame = async () => {
    const userId = firebaseAuth.currentUser?.uid;
    if (!userId) {
      console.error('Usuário não autenticado.');
      return;
    }

    const agendamento = {
      userId,
      nomeEspecialista,
      especialidade,
      data,
      horario,
      razao,
    };

    try {
      await inserirAgendamento(agendamento);
      console.log('Agendamento marcado com sucesso!');
    } catch (error) {
      console.error('Erro ao marcar agendamento:', error);
    }
  };

  return (
    <View>
      <NomeEspecialista value={nomeEspecialista} onChangeText={setNomeEspecialista} />
      <Especialidade value={especialidade} onChangeText={setEspecialidade} />
      <DateInput value={data} onChange={setData} />
      <TimeInput value={horario} onChange={setHorario} />
      <RazaoInput value={razao} onChangeText={setRazao} />

      <MarcarExameButton onPress={handleMarcarExame} />
    </View>
  );
};

export default CriarAgendamento;
