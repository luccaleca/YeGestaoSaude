import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

const FotoCarteirinha = () => {
  const route = useRoute();
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      {imageUrl ? (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      ) : (
        <Text style={styles.text}>Nenhuma imagem disponível</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    color: '#000',
  },
});

export default FotoCarteirinha;
