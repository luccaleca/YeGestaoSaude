import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Onboarding1 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.replace('Inicial')}>
        <Text style={styles.skipButtonText}>Pular</Text>
      </TouchableOpacity>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Sua carteira de saúde{'\n'}digital.</Text>
          <View style={styles.rectanglesContainer}>
            <View style={[styles.rectangle, styles.activeRectangle]} />
            <View style={styles.rectangle} />
            <View style={styles.rectangle} />
            <View style={styles.rectangle} />
          </View>
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('Onboarding2')}>
          <Text style={styles.nextButtonText}>→</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingVertical: 20,
    backgroundColor: '#FFFFFF',
  },
  skipButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  skipButtonText: {
    fontSize: 16,
    color: '#000',
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  rectanglesContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  rectangle: {
    width: 20,
    height: 5,
    backgroundColor: '#D3D3D3',
    marginHorizontal: 2,
  },
  activeRectangle: {
    backgroundColor: '#739589',
  },
  nextButton: {
    backgroundColor: '#739589',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 32,
  },
});

export default Onboarding1;
