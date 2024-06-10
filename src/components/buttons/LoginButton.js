import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const LoginButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>Login</Text>
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginButton;
