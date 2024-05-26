// CadastroButton.js
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CadastroButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CadastroButton;
