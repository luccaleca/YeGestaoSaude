import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../SideBar';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"orange"
  },
});

export default Home;
