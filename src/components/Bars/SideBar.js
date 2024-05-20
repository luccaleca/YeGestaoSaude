import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, Files, Home, User } from '../../icons/Icons';

const SideBar = () => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    navigation.navigate('Menu');
  };

  const handleConsultasPress = () => {
    navigation.navigate('Agenda');
  };

  const handleDocumentsPress = () => {
    navigation.navigate('Documentos');
  };
  
  const handleUserPress = () => {
    navigation.navigate('Perfil');
  };

  return (
    <View style={styles.container}>
      {/* Primeira parte da barra lateral */}
      <TouchableOpacity style={styles.item} onPress={handleMenuPress}>
        <Home />
        <Text>Menu</Text>
      </TouchableOpacity>
      {/* Segunda parte da barra lateral */}
      <TouchableOpacity style={styles.item} onPress={handleConsultasPress}>
        <Calendar />
        <Text>Agenda</Text>
      </TouchableOpacity>
      {/* Terceira parte da barra lateral */}
      <TouchableOpacity style={styles.item} onPress={handleDocumentsPress}>
        <Files />
        <Text>Documentos</Text>
      </TouchableOpacity>
      {/* Quarta parte da barra lateral */}
      <TouchableOpacity style={styles.item} onPress={handleUserPress}>
        <User />
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Layout em linha
    position: 'absolute', // Fixa a barra lateral na parte inferior
    bottom: 0, // Alinha a barra lateral na parte inferior
    width: '100%', // Ocupa toda a largura da tela
  },
  item: {
    flex: 1, // Cada item ocupa uma parte igual da largura disponível
    alignItems: 'center', // Centraliza os ícones horizontalmente
    justifyContent: 'center', // Centraliza os ícones verticalmente
    backgroundColor: '#eee', // Cor de fundo dos itens
    height: 50, // Altura dos itens (pode ser ajustada conforme necessário)
  },
  itemText: {
    fontSize: 12, // Ajuste o tamanho do texto conforme necessário
  },
});

export default SideBar;
