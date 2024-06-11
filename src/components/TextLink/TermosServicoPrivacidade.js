import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SquareIcon, CheckSquareIcon } from "../../icons/Icons";

const TermosServico = ({ acceptedTerms, setAcceptedTerms }) => {
  const navigation = useNavigation();

  const toggleCheckbox = () => {
    setAcceptedTerms(!acceptedTerms);
  };

  const handleTermsPress = () => {
    navigation.navigate('Termos De Servico');
  };

  const handlePrivacyPress = () => {
    navigation.navigate('Políticas De Privacidade');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleCheckbox}>
        {acceptedTerms ? <CheckSquareIcon /> : <SquareIcon />}
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Eu aceito os </Text>
        <TouchableOpacity onPress={handleTermsPress}>
          <Text style={[styles.text, styles.link]}>Termos de Serviço</Text>
        </TouchableOpacity>
        <Text style={styles.text}> e as </Text>
        <TouchableOpacity onPress={handlePrivacyPress}>
          <Text style={[styles.text, styles.link]}>Políticas de Privacidade</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginLeft: 10, // Adicionando espaçamento à esquerda
  },
  text: {
    color: '#000',
  },
  link: {
    color: '#739589',
  },
});

export default TermosServico;
