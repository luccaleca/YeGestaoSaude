import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divisoria = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  line: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default Divisoria;
