import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Calendar, Home, Files, User } from '../icons/Icons';
import { useNavigation } from '@react-navigation/native';

const SideBar = () => {
    const navigation = useNavigation();
    

    const handleConsultasPress = () => {
        navigation.navigate('Agenda')
    }
  return (
    <View style={styles.container}>
      {/* Primeira parte da barra lateral */}
      
      <View style={styles.item}>

        <Home />
        <Text>Menu</Text> 

      </View>
      {/* Segunda parte da barra lateral */}
      <View style={styles.item}>
      <TouchableOpacity style={styles.item} onPress={handleConsultasPress}>
      <Calendar />
      <Text>Agenda</Text>
        </TouchableOpacity>
      

      </View>
      {/* Terceira parte da barra lateral */}
      <View style={styles.item}>

        <Files />
        <Text>Documentos</Text>
        {/* Adicione seus ícones aqui */}
      </View>
      {/* Quarta parte da barra lateral */}
      <View style={styles.item}>

        <User />
        <Text>User</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Layout em linha
    position: 'absolute', // Fixa a barra lateral na parte inferior
    bottom: 0, // Alinha a barra lateral na parte inferior
    width: '100%', // Ocupa toda a largura da tela
    backgroundColor: "green",
  },
  item: {
    flex: 1, // Cada item ocupa uma parte igual da largura disponível
    alignItems: 'center', // Centraliza os ícones horizontalmente
    justifyContent: 'center', // Centraliza os ícones verticalmente
    backgroundColor: '#eee', // Cor de fundo dos itens
    height: 50, // Altura dos itens (pode ser ajustada conforme necessário)
  },
});

export default SideBar;
