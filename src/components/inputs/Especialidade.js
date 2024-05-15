import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Especialidade = () => {
  const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState('');

  // Lista de especialidades de médicos
  const especialidades = [
    'Ortopedista',
    'Cardiologista',
    'Dermatologista',
    'Pediatra',
    // Adicione mais especialidades conforme necessário
  ];

  const handleEspecialidadeChange = (itemValue, itemIndex) => {
    setEspecialidadeSelecionada(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione a especialidade:</Text>
      <View style={styles.inputContainer}>
        <Picker
          selectedValue={especialidadeSelecionada}
          onValueChange={handleEspecialidadeChange}
          style={styles.picker}
        >
          {/* Mapeie as especialidades para criar as opções */}
          {especialidades.map((especialidade, index) => (
            <Picker.Item key={index} label={especialidade} value={especialidade} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  inputContainer: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  picker: {
    flex: 1,
  },
});

export default Especialidade;
