import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CadastroButton = ({ onPress, disabled }) => {
  return (
    <TouchableOpacity style={[styles.button, disabled && styles.buttonDisabled]} onPress={onPress} disabled={disabled}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#63987C',
    borderRadius: 230,
    paddingVertical: 16, // aumentar a altura (grossura)
    paddingHorizontal: 120, // aumentar a largura
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CadastroButton;
