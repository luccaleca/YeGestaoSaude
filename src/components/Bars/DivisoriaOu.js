import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DivisoriaOu = ({ text }) => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>{text}</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  text: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#8e8e93',
  },
});

export default DivisoriaOu;
