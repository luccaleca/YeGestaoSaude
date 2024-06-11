import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar, Files, Home, UserIcon } from '../../icons/Icons';

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
      <TouchableOpacity style={styles.item} onPress={handleMenuPress}>
        <Home />
        <Text>Menu</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleConsultasPress}>
        <Calendar />
        <Text>Agenda</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleDocumentsPress}>
        <Files />
        <Text>Documentos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleUserPress}>
        <UserIcon />
        <Text>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 2 }, // Deslocamento da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 4, // Raio da sombra
    elevation: 5, // Elevação para sombra no Android
    borderTopWidth: 1, // Largura da borda superior
    borderTopColor: '#DDDDDD', // Cor da borda superior
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  itemText: {
    fontSize: 12,
  },
});

export default SideBar;
