import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const RazaoInput = () => {
  const [reason, setReason] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Escreva a razão da consulta:</Text>
      <TextInput
        style={styles.input}
        multiline
        numberOfLines={4}
        onChangeText={setReason}
        value={reason}
        placeholder="motivo da consulta"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlignVertical: 'top', // Ensures text starts at the top in Android
  },
});

export default RazaoInput;
