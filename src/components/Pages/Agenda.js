import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../SideBar';
import CategoriaDeAgendamento from '../Agendamento/CategoriaDeAgendamento';

const Agendamento = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <CategoriaDeAgendamento />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  sidebar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Agendamento;
