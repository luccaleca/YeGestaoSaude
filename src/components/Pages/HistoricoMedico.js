import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput } from 'react-native';
import { firebaseAuth } from '../../../config/firebaseConfig';
import { addUserData } from '../../../config/firebaseDadosUsuarios';
import SaveButton from '../Buttons/SaveButton'; 

const HistoricoMedico = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [bmi, setBmi] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [familyDiseases, setFamilyDiseases] = useState('');
  const [allergies, setAllergies] = useState('');
  const [otherNotes, setOtherNotes] = useState('');

  const handleSave = async () => {
    const userId = firebaseAuth.currentUser.uid;
    const historicoMedico = {
      afericaoPressao: bloodPressure,
      glicemia: glucoseLevel,
      imc: bmi,
      doencasPassadasCronicas: medicalHistory,
      doencasFamiliares: familyDiseases,
      alergias: allergies,
      outrasNotas: otherNotes,
    };

    try {
      await addUserData(userId, {}, historicoMedico, {}, []);
      console.log('Histórico médico adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar histórico médico:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico Médico</Text>
      <TextInput
        style={styles.input}
        placeholder="Última Aferição da Pressão"
        value={bloodPressure}
        onChangeText={setBloodPressure}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Última Aferição de Glicemia"
        value={glucoseLevel}
        onChangeText={setGlucoseLevel}
        keyboardType="numeric"
      />
      <Text>O IMC vai calcular o resultado automaticamente usando sua massa/altura</Text>
      <TextInput
        style={styles.input}
        placeholder="IMC"
        value={bmi}
        onChangeText={setBmi}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Doenças Passadas e Crônicas"
        value={medicalHistory}
        onChangeText={setMedicalHistory}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: estou há duas semanas com dores no estômago</Text>

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Doenças Graves em sua Família"
        value={familyDiseases}
        onChangeText={setFamilyDiseases}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: minha avó teve câncer de mama e meu pai é diabético.</Text>

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Alergias"
        value={allergies}
        onChangeText={setAllergies}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: sou alérgico a penicilina e poeira.</Text>

      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Outras Notas"
        value={otherNotes}
        onChangeText={setOtherNotes}
        keyboardType="default"
        multiline
        textAlignVertical="top"
      />
      <Text>Exemplo: há dois meses comecei a fazer jejum intermitente.</Text>

      <SaveButton onPress={handleSave} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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

export default HistoricoMedico;
