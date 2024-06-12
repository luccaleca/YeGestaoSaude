import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert, Modal, TouchableOpacity } from 'react-native';
import Especialidade from '../Inputs/Especialidade';
import NomeEspecialista from '../Inputs/NomeEspecialista';
import DateInput from '../Inputs/DateInput';
import TimeInput from '../Inputs/TimeInput';
import RazaoInput from '../Inputs/RazaoInput';
import inserirAgendamento from '../../../config/Inserir/InserirAgendamento';
import { firebaseAuth } from '../../../config/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

const CriarAgendamento = () => {
  const [nomeEspecialista, setNomeEspecialista] = useState('');
  const [especialidade, setEspecialidade] = useState('');
  const [data, setData] = useState(new Date());
  const [horario, setHorario] = useState(new Date());
  const [razao, setRazao] = useState('');
  const [retorno, setRetorno] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

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
      setModalVisible(true);
    } catch (error) {
      console.error('Erro ao marcar agendamento:', error);
    }
  };

  const closeModalAndNavigate = () => {
    setModalVisible(false);
    navigation.navigate('Agenda');
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
      <TouchableOpacity style={styles.marcarExameButton} onPress={handleMarcarExame}>
        <Text style={styles.marcarExameButtonText}>Marcar Exame</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Agendado com sucesso</Text>
          <Text style={styles.modalSubText}>Seu agendamento foi realizado com sucesso. Você pode consultar seus agendamentos em Agenda!</Text>
          <TouchableOpacity style={styles.okButton} onPress={closeModalAndNavigate}>
            <Text style={styles.okButtonText}>Ok</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
  marcarExameButton: {
    backgroundColor: '#199A8E', // Cor do botão
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  marcarExameButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'white',
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalSubText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  okButton: {
    backgroundColor: '#199A8E', // Cor do botão "Ok"
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  okButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default CriarAgendamento;
