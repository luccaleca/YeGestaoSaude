import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const CategoriaDeAgendamento = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('Por Vir');

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, selectedCategory === 'Por Vir' && styles.selectedButton]}
        onPress={() => handleCategoryPress('Por Vir')}
      >
        <Text style={[styles.buttonText, selectedCategory === 'Por Vir' && styles.selectedButtonText]}>Por Vir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedCategory === 'Feito' && styles.selectedButton]}
        onPress={() => handleCategoryPress('Feito')}
      >
        <Text style={[styles.buttonText, selectedCategory === 'Feito' && styles.selectedButtonText]}>Feito</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, selectedCategory === 'Cancelado' && styles.selectedButton]}
        onPress={() => handleCategoryPress('Cancelado')}
      >
        <Text style={[styles.buttonText, selectedCategory === 'Cancelado' && styles.selectedButtonText]}>Cancelado</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#EAF4F3',
    borderRadius: 20,
    overflow: 'hidden',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#199A8E',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#6A707C',
  },
  selectedButtonText: {
    color: '#fff',
  },
});

export default CategoriaDeAgendamento;
