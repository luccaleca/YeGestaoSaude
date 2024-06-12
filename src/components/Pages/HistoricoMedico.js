import React, { useState, useEffect } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, Alert, View } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import inserirHistoricoMedico from '../../../config/Inserir/InserirHistorico_medico';

const HistoricoMedico = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [bmi, setBmi] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [familyDiseases, setFamilyDiseases] = useState('');
  const [allergies, setAllergies] = useState('');
  const [otherNotes, setOtherNotes] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchHistoricoMedico = async () => {
      try {
        const doc = await firebaseFirestore.collection('usuarios').doc(userId).collection('historico_medico').doc('info').get();
        if (doc.exists) {
          const data = doc.data();
          setBloodPressure(data.afericaoPressao || '');
          setGlucoseLevel(data.glicemia || '');
          setBmi(data.imc || '');
          setMedicalHistory(data.doencasPassadasCronicas || '');
          setFamilyDiseases(data.doencasFamiliares || '');
          setAllergies(data.alergias || '');
          setOtherNotes(data.outrasNotas || '');
        }
      } catch (error) {
        console.error('Erro ao buscar histórico médico:', error);
      }
    };

    const fetchDadosPessoais = async () => {
      try {
        const doc = await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').get();
        if (doc.exists) {
          const data = doc.data();
          setPeso(data.peso || '');
          setAltura(data.altura || '');
        }
      } catch (error) {
        console.error('Erro ao buscar dados pessoais:', error);
      }
    };

    if (userId) {
      fetchHistoricoMedico();
      fetchDadosPessoais();
    }
  }, [userId]);

  useEffect(() => {
    if (peso && altura) {
      const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);
      setBmi(imc);
    }
  }, [peso, altura]);

  const getBmiStatus = () => {
    const imc = parseFloat(bmi);
    if (imc < 18.5) return 'Abaixo do peso';
    if (imc < 24.9) return 'Peso normal';
    if (imc < 29.9) return 'Sobrepeso';
    return 'Obesidade';
  };

  const handleSave = async () => {
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
      await inserirHistoricoMedico(userId, historicoMedico);
      Alert.alert('Sucesso', 'Histórico médico adicionado com sucesso');
    } catch (error) {
      console.error('Erro ao adicionar histórico médico:', error);
      Alert.alert('Erro', 'Não foi possível adicionar o histórico médico');
    }
  };

  const getBmiIndicatorStyle = (range) => {
    const imc = parseFloat(bmi);
    let backgroundColor = '#E8E8E8';
    if (range === 'underweight' && imc < 18.5) backgroundColor = '#FFFF00'; // Amarelo
    if (range === 'normal' && imc >= 18.5 && imc < 24.9) backgroundColor = '#00FF00'; // Verde
    if (range === 'overweight' && imc >= 24.9 && imc < 29.9) backgroundColor = '#FFA500'; // Laranja
    if (range === 'obese' && imc >= 29.9) backgroundColor = '#FF0000'; // Vermelho
    return [styles.bmiIndicator, { backgroundColor }];
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Histórico Médico</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Última Aferição da Pressão</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: 120/80 mmHg"
          value={bloodPressure}
          onChangeText={setBloodPressure}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Última Aferição de Glicemia</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: 90 mg/dL"
          value={glucoseLevel}
          onChangeText={setGlucoseLevel}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>IMC</Text>
        <Text style={styles.helperText}>O IMC será calculado automaticamente usando sua massa/altura</Text>
        <TextInput
          style={[styles.input, styles.imcInput]}
          placeholder="Exemplo: 24.5"
          value={bmi}
          editable={false}
        />
        <View style={styles.bmiIndicatorContainer}>
          <View style={getBmiIndicatorStyle('underweight')} title="Abaixo do peso"></View>
          <View style={getBmiIndicatorStyle('normal')} title="Peso normal"></View>
          <View style={getBmiIndicatorStyle('overweight')} title="Sobrepeso"></View>
          <View style={getBmiIndicatorStyle('obese')} title="Obesidade"></View>
        </View>
        <Text style={styles.bmiStatusText}>{getBmiStatus()}</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Doenças Passadas e Crônicas</Text>
        <Text style={styles.helperText}>Exemplo: estou há duas semanas com dores no estômago</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Descreva suas doenças passadas e crônicas"
          value={medicalHistory}
          onChangeText={setMedicalHistory}
          keyboardType="default"
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Doenças Graves em sua Família</Text>
        <Text style={styles.helperText}>Exemplo: minha avó teve câncer de mama e meu pai é diabético.</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Descreva as doenças graves em sua família"
          value={familyDiseases}
          onChangeText={setFamilyDiseases}
          keyboardType="default"
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Alergias</Text>
        <Text style={styles.helperText}>Exemplo: sou alérgico a penicilina e poeira.</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Descreva suas alergias"
          value={allergies}
          onChangeText={setAllergies}
          keyboardType="default"
          multiline
          textAlignVertical="top"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Outras Notas</Text>
        <Text style={styles.helperText}>Exemplo: há dois meses comecei a fazer jejum intermitente.</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          placeholder="Adicione outras notas relevantes"
          value={otherNotes}
          onChangeText={setOtherNotes}
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
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  imcInput: {
    backgroundColor: '#D5F5E3',
    fontWeight: 'bold',
  },
  helperText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 5,
  },
  bmiIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
  },
  bmiIndicator: {
    height: 10,
    width: '23%',
    borderRadius: 5,
    backgroundColor: '#E8E8E8',
  },
  bmiStatusText: {
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#199A8E',
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

export default HistoricoMedico;
