import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.replace('Onboarding1');
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.logoContainer}>
        <Image source={require('../../../../assets/images/LogoPrincipal.png')} style={styles.logo} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#739589', // Cor de fundo conforme a imagem
  },
  logoContainer: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Esconde a parte da imagem que transborda o container
  },
  logo: {
    width: '120%', // Largura maior que o container para dar zoom
    height: '120%', // Altura maior que o container para dar zoom
    resizeMode: 'contain', // Modo de redimensionamento da imagem
  },
});

export default SplashScreen;
