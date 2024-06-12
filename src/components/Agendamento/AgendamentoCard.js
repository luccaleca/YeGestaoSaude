import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { firebaseFirestore, firebaseAuth } from '../../../config/firebaseConfig'; 
import { useNavigation } from '@react-navigation/native'; 

const AgendamentoCard = ({ agendamento, onDelete }) => {
  const { id, nomeEspecialista, especialidade, data, horario, status } = agendamento;
  const navigation = useNavigation();

  const handleDelete = async () => {
    try {
      const userId = firebaseAuth.currentUser?.uid;
      if (!userId) {
        console.error('Usuário não autenticado.');
        return;
      }

      await firebaseFirestore.collection('usuarios').doc(userId).collection('agendamentos').doc(id).update({ status: 'Cancelado' });
      onDelete(id); 
      Alert.alert('Sucesso', 'Agendamento cancelado com sucesso.');
    } catch (error) {
      console.error('Erro ao cancelar agendamento:', error);
      Alert.alert('Erro', 'Não foi possível cancelar o agendamento.');
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      'Cancelar Agendamento',
      'Tem certeza que deseja cancelar este agendamento?',
      [
        { text: 'Não', style: 'cancel' },
        { text: 'Sim', onPress: handleDelete }
      ],
      { cancelable: false }
    );
  };

  const handleEdit = () => {
    navigation.navigate('EditarAgendamento', { agendamentoId: id });
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Agendamento</Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Nome do Especialista: </Text>{nomeEspecialista}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Especialidade: </Text>{especialidade}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Data: </Text>{data}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Hora: </Text>{horario}
      </Text>
      <Text style={styles.text}>
        <Text style={styles.label}>Status: </Text>{status}
      </Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.buttonCancel} onPress={confirmDelete}>
  <Text style={styles.buttonCancelText}>Cancelar</Text>
</TouchableOpacity>
        <TouchableOpacity style={styles.buttonEdit} onPress={handleEdit}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  buttonCancel: {
    backgroundColor: '#e8f3f1', // Cor verde claro ajustada
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',

  },
  buttonCancelText: {
    color: 'black', // Texto preto para o botão cancelar
    fontWeight: 'bold',
  },

  buttonEdit: {
    backgroundColor: '#199A8E', // Cor verde mais forte
    padding: 10,
    borderRadius: 5,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AgendamentoCard;
