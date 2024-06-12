import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import { inserirMedicamentos } from '../../../config/Inserir/InserirMedicamentos';

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
      Alert.alert('Sucesso', 'Medicamentos adicionados com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar medicamentos:', error);
      Alert.alert('Erro', 'Não foi possível adicionar os medicamentos');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Medicamentos</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medicamentos que faz uso atualmente</Text>
        <Text style={styles.helperText}>Descreva os medicamentos que você está utilizando no momento</Text>
        <TextInput
          style={[styles.input, styles.wideInput]}
          placeholder="Exemplo: Paracetamol, 500mg, 2 vezes ao dia"
          value={currentMedications}
          onChangeText={setCurrentMedications}
          keyboardType="default"
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Medicamentos utilizados no passado</Text>
        <Text style={styles.helperText}>Descreva os medicamentos que você utilizou anteriormente</Text>
        <TextInput
          style={[styles.input, styles.wideInput]}
          placeholder="Exemplo: Amoxicilina, 500mg, 3 vezes ao dia, durante 7 dias"
          value={pastMedications}
          onChangeText={setPastMedications}
          keyboardType="default"
          multiline
          textAlignVertical="top"
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#199A8E',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 5,
    backgroundColor: '#E8F3F1',
  },
  wideInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  helperText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#199A8E',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 30,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Medicamentos;
