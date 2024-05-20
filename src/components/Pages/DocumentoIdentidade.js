import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SideBar from '../Bars/SideBar';
import AddDocumentosButton from '../Buttons/AddDocumentosButton';

const DocumentoIdentidade = () => {
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

export default DocumentoIdentidade;
