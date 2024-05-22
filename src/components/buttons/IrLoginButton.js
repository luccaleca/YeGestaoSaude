import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const IrLoginButton = ({ onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) onPress(); // Chama a função onPress passada como prop, se existir
    navigation.navigate('Login'); // Navega para a tela de cadastro
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Login</Text>
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

export default IrLoginButton;
