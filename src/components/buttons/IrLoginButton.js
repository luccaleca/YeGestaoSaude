import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IrLoginButton = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) onPress(); // Chama a função onPress passada como prop, se existir
    navigation.navigate('Login'); // Navega para a tela de login
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#63987C',
    borderRadius: 230,
    paddingVertical: 16, // Aumentar a altura (grossura)
    paddingHorizontal: 120, // Aumentar a largura
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default IrLoginButton;
