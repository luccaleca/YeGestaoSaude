import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SideBar from '../SideBar';
import AddDocumentosButton from '../Buttons/AddDocumentosButton';

const Documentos = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/SemDocumento.png')}
        style={styles.semDocumento}
      />
      <Text style={styles.text}>Quando você adicionar seus documentos, eles estarão seguros aqui</Text>
      <AddDocumentosButton />
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  semDocumento: {

    marginBottom: 20, // Adiciona um espaço abaixo da imagem
  },
  text: {
    textAlign: 'center', // Centraliza o texto horizontalmente
    marginBottom: 20, // Adiciona um espaço abaixo do texto
  }
});

export default Documentos;
