import React from 'react';
import { Image, StyleSheet, View, Button } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const ImagemDocumento = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { imageUrl } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Button title="Fechar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
});

export default ImagemDocumento;
