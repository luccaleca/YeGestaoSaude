import { useNavigation } from '@react-navigation/native'; // Importe os componentes necessários do React Navigation
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Bell, Plus } from '../../icons/Icons';
import CategoriaDeAgendamento from '../Agendamento/CategoriaDeAgendamento';
import SideBar from '../Bars/SideBar';

const Agendamento = () => {
  const navigation = useNavigation(); // Obtenha o objeto de navegação usando useNavigation()

  const handlePlusPress = () => {
    navigation.navigate('CriarAgendamento'); // Navegue para a tela 'CriarAgendamento'
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconsContainer}>
          <Bell style={styles.icon} />
          {/* Use TouchableOpacity para tornar o ícone Plus clicável */}
          <TouchableOpacity style={styles.plusIcon} onPress={handlePlusPress}>
            <Plus style={styles.icon} />
          </TouchableOpacity>
        </View>
        <View style={styles.categoriaContainer}>
          <CategoriaDeAgendamento />
        </View>
      </View>
      <View style={styles.sidebar}>
        <SideBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    position: 'relative',
  },
  sidebar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconsContainer: {
    position: 'absolute',
    top: 20,
    right: 50,
    flexDirection: 'row',
  },
  categoriaContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 10,
  },
  plusIcon: {
    marginRight: 10, // Adicione um espaçamento à direita para separar o ícone Bell
  },
});

export default Agendamento;
