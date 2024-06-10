import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

const EsqueciMinhaSenhaText = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('EsqueciSenha');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  link: {
    color: '#739589',
  },
  container: {
    flexDirection: 'row', // Alinha os itens na horizontal
    alignItems: 'center', // Alinha os itens verticalmente no centro
  },
});

export default EsqueciMinhaSenhaText;
