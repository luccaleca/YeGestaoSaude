import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import Especialidade from '../Inputs/Especialidade';
import NomeEspecialista from '../Inputs/NomeEspecialista';
import DateInput from '../Inputs/DateInput';
import TimeInput from '../Inputs/TimeInput';
import RazaoInput from '../Inputs/RazaoInput';
import MarcarExameButton from '../Buttons/SaveButton';
import { firebaseFirestore, firebaseAuth } from '../../../config/firebaseConfig';
import SaveButton from '../Buttons/SaveButton';

const EditarAgendamento = ({ route, navigation }) => {
  const { agendamentoId } = route.params;

  const [nomeEspecialista, setNomeEspecialista] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState(new Date());
  const [horario, setHorario] = useState(new Date());
  const [razao, setRazao] = useState('');

  useEffect(() => {
    const fetchAgendamento = async () => {
      const userId = firebaseAuth.currentUser?.uid;
      if (!userId) {
        console.error('Usuário não autenticado.');
        return;
      }

      try {
        const agendamentoDoc = await firebaseFirestore.collection('usuarios').doc(userId).collection('agendamentos').doc(agendamentoId).get();
        if (agendamentoDoc.exists) {
          const agendamentoData = agendamentoDoc.data();
          setNomeEspecialista(agendamentoData.nomeEspecialista);
          setEspecialidade(agendamentoData.especialidade);
          setData(new Date(agendamentoData.data));
          setHorario(new Date(`${agendamentoData.data}T${agendamentoData.horario}`));
          setRazao(agendamentoData.razao);
        }
      } catch (error) {
        console.error('Erro ao buscar agendamento:', error);
      }
    };

    fetchAgendamento();
  }, [agendamentoId]);

  const handleSaveChanges = async () => {
    const userId = firebaseAuth.currentUser?.uid;
    if (!userId) {
      console.error('Usuário não autenticado.');
      return;
    }

    const agendamentoAtualizado = {
      nomeEspecialista,
      especialidade,
      data: data.toISOString().split('T')[0], // Converting Date to String (YYYY-MM-DD)
      horario: horario.toTimeString().split(' ')[0], // Converting Time to String (HH:MM:SS)
      razao,
    };

    try {
      await firebaseFirestore.collection('usuarios').doc(userId).collection('agendamentos').doc(agendamentoId).update(agendamentoAtualizado);
      Alert.alert('Sucesso', 'Agendamento atualizado com sucesso.');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao atualizar agendamento:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o agendamento.');
    }
  };

  return (
    <View>
      <NomeEspecialista value={nomeEspecialista} onChangeText={setNomeEspecialista} />
      <Especialidade value={especialidade} onChangeText={setEspecialidade} />
      <DateInput value={data} onChange={setData} />
      <TimeInput value={horario} onChange={setHorario} />
      <RazaoInput value={razao} onChangeText={setRazao} />

      <SaveButton onPress={handleSaveChanges} />
    </View>
  );
};

export default EditarAgendamento;
