import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../Bars/SideBar';

const Medicamentos = () => {
  return (
    <View style={styles.container}>
      <Text>Medicamentos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Medicamentos;
