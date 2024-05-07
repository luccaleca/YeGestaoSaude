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
    backgroundColor: '#007AFF', // Cor de fundo do botão
    borderRadius: 50, // Borda arredondada
    paddingVertical: 12, // Espaçamento vertical interno
    paddingHorizontal: 24, // Espaçamento horizontal interno
    marginTop: 30
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 16, // Tamanho do texto
    fontWeight: 'bold', // Negrito
    textAlign: 'center', // Alinhamento central do texto
  },
});

export default CadastroButton;
