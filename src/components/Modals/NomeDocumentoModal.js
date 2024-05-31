// src/components/CustomInputModal.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const NomeDocumentoModal = ({ isVisible, onClose, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleConfirm = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Nome do Documento</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do documento"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Cancelar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleConfirm}>
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: '#007AFF',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default NomeDocumentoModal;
