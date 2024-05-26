import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';


import IrLoginButton from '../Buttons/IrLoginButton';
import CadastrarText from '../TextLink/CadastrarText';
import IrCadastroButton from '../Buttons/IrCadastroButton';
;

const Inicial = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/LogoInvertido.png')} style={styles.logo} />
      <Text style={styles.title}>Vamos começar</Text>
      <Text style={styles.subtitle}>Faça o cadastro e aproveite todas as funcionalidades, e fique com saúde.</Text>
      <IrLoginButton />
      <IrCadastroButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 20, // Adiciona espaço no topo
  },
  logo: {
    width: "100%", // largura da imagem
    height: 300, // altura da imagem
    marginBottom: 20, // espaçamento inferior
  },
  title: {
    fontSize: 24, // tamanho da fonte maior para o título
    fontWeight: 'bold', // negrito
    color: 'black', // cor preta
    marginBottom: 10, // espaçamento inferior
  },
  subtitle: {
    fontSize: 16, // tamanho da fonte para o subtítulo
    color: 'black', // cor preta
    marginBottom: 20, // espaçamento inferior
    textAlign: 'center', // centralizar o texto
    paddingHorizontal: 20, // espaçamento lateral
  },
});

export default Inicial;
