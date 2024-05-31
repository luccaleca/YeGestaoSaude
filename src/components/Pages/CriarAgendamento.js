import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
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
  const [data, setData] = useState(new Date());
  const [horario, setHorario] = useState(new Date());
  const [razao, setRazao] = useState('');
  const [retorno, setRetorno] = useState('');

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
      data: data.toISOString().split('T')[0], // Converting Date to String (YYYY-MM-DD)
      horario: horario.toTimeString().split(' ')[0], // Converting Time to String (HH:MM:SS)
      razao,
      retorno,
    };

    try {
      await inserirAgendamento(agendamento);
      console.log('Agendamento marcado com sucesso!');
    } catch (error) {
      console.error('Erro ao marcar agendamento:', error);
    }
  };

  return (
    <View style={styles.container}>
      <NomeEspecialista value={nomeEspecialista} onChangeText={setNomeEspecialista} />
      <Especialidade value={especialidade} onChangeText={setEspecialidade} />
      <DateInput value={data} onChange={setData} />
      <TimeInput value={horario} onChange={setHorario} />
      <RazaoInput value={razao} onChangeText={setRazao} />
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Retorno:</Text>
        <TextInput
          style={styles.input}
          value={retorno}
          onChangeText={setRetorno}
          placeholder="Informe o retorno"
        />
      </View>
      <MarcarExameButton onPress={handleMarcarExame} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputContainer: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CriarAgendamento;
