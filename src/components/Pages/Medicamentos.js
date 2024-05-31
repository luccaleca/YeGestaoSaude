import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import { inserirMedicamentos } from '../../../config/Inserir/InserirMedicamentos';
import SaveButton from '../Buttons/SaveButton';

const Medicamentos = () => {
  const [currentMedications, setCurrentMedications] = useState('');
  const [pastMedications, setPastMedications] = useState('');
  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchMedicamentos = async () => {
      try {
        const doc = await firebaseFirestore.collection('usuarios').doc(userId).collection('medicamentos').doc('info').get();
        if (doc.exists) {
          const data = doc.data();
          setCurrentMedications(data.medicamentosAtuais || '');
          setPastMedications(data.medicamentosPassados || '');
        }
      } catch (error) {
        console.error('Erro ao buscar medicamentos:', error);
      }
    };

    if (userId) {
      fetchMedicamentos();
    }
  }, [userId]);

  const handleSave = async () => {
    const medicamentos = {
      medicamentosAtuais: currentMedications,
      medicamentosPassados: pastMedications,
    };

    try {
      await inserirMedicamentos(userId, medicamentos);
      console.log('Medicamentos adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar medicamentos:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medicamentos</Text>
      <Text>Faz uso atualmente</Text>
      <TextInput
        style={[styles.input, styles.wideInput]}
        placeholder="Medicamentos que faz uso atualmente"
        value={currentMedications}
        onChangeText={setCurrentMedications}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Fez uso no passado</Text>
      <TextInput
        style={[styles.input, styles.wideInput]}
        placeholder="Medicamentos utilizados no passado"
        value={pastMedications}
        onChangeText={setPastMedications}
        keyboardType="default"
        multiline
        textAlignVertical="top"
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
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  wideInput: {
    height: 100, // Ajuste a altura conforme necessário
  },
});

export default Medicamentos;
