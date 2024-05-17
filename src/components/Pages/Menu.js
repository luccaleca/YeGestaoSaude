import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../SideBar';

const Menu = () => {
  return (
    <View style={styles.container}>
      <Text>Menu</Text>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Menu;
