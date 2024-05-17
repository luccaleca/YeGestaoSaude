import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../SideBar';

const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Perfil;
