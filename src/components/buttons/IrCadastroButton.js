import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IrCadastroButton = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) onPress(); // Chama a função onPress passada como prop, se existir
    navigation.navigate('Cadastro'); // Navega para a tela de cadastro
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Cadastrar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#6E8A78',
    borderRadius: 230,
    paddingVertical: 16, // Aumentar a altura (grossura)
    paddingHorizontal: 100, // Aumentar a largura
    marginTop: 20,
  },
  buttonText: {
    color: '#6E8A78',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IrCadastroButton;
