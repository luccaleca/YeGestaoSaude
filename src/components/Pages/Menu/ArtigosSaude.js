import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ArtigosSaude = () => {
  const navigation = useNavigation();

  const handlePressArtigo1 = () => {
    navigation.navigate('ArtigoSaudeMenu1');
  };

  const handlePressArtigo2 = () => {
    
     navigation.navigate('ArtigoSaudeMenu2');
  };

  const handlePressArtigo3 = () => {
    
     navigation.navigate('ArtigoSaudeMenu3');
  };

  const handlePressArtigo4 = () => {
    
     navigation.navigate('ArtigoSaudeMenu4');
  };

  return (
    <View style={styles.container}>
      <View style={styles.artigosHeader}>
        <Text style={styles.artigosTitle}>Artigos de Saúde</Text>
      </View>
      <View style={styles.artigosContainer}>
        <TouchableOpacity style={styles.artigoBox} onPress={handlePressArtigo1}>
          <Text style={styles.artigoText}>O exercício físico: um fator importante para a saúde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.artigoBox} onPress={handlePressArtigo2}>
          <Text style={styles.artigoText}>Os Benefícios da Alimentação Saudável</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.artigoBox} onPress={handlePressArtigo3}>
          <Text style={styles.artigoText}>Como o sono afeta sua saúde</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.artigoBox} onPress={handlePressArtigo4}>
          <Text style={styles.artigoText}>A importância da hidratação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  artigosHeader: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  artigosTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left', // Alinhamento à esquerda
  },
  artigosContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  artigoBox: {
    width: '100%',
    height: 70, // Aumenta a altura dos contêineres dos artigos
    backgroundColor: '#FFFFFF', // Define o fundo branco para os artigos
    borderRadius: 10,
    borderWidth: 1, // Adiciona uma linha de contorno
    borderColor: '#E8E8E8', // Cor da linha de contorno
    marginBottom: 15, // Aumenta o espaçamento entre os contêineres
    padding: 10, // Adiciona um padding para o conteúdo interno
    justifyContent: 'center',
  },
  artigoText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left', // Alinhamento à esquerda
  },
});

export default ArtigosSaude;
