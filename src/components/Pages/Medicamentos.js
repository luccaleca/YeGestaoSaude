import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import { addUserData } from '../../../config/firebaseDadosUsuarios';
import SaveButton from '../Buttons/SaveButton'; // Importe o SaveButton

const Medicamentos = () => {
  const [medicamento, setMedicamento] = useState('');
  const [dose, setDose] = useState('');
  const [frequencia, setFrequencia] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const doc = await firebaseFirestore.collection('users').doc(userId).collection('medicamentos').doc('dados').get();
        if (doc.exists) {
          const data = doc.data();
          setMedicamento(data.medicamento || '');
          setDose(data.dose || '');
          setFrequencia(data.frequencia || '');
        }
      } catch (error) {
        console.error('Erro ao buscar medicamentos:', error);
      }
    };

    fetchMedicamentos();
  }, [userId]);

  const handleSave = async () => {
    const medicamentosData = {
      medicamento,
      dose,
      frequencia,
    };

    try {
      await firebaseFirestore.collection('users').doc(userId).collection('medicamentos').doc('dados').set(medicamentosData);
      console.log('Medicamentos adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar medicamentos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicamentos</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Medicamento"
        value={medicamento}
        onChangeText={setMedicamento}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Dose"
        value={dose}
        onChangeText={setDose}
        keyboardType="default"
      />
      <TextInput
        style={styles.input}
        placeholder="Frequência"
        value={frequencia}
        onChangeText={setFrequencia}
        keyboardType="default"
      />
      <SaveButton onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
});

export default Medicamentos;
