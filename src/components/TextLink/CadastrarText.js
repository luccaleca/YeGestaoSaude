import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";


 const Cadastro = ({ navigation }) => {
    const handleCadastroPress = () => {
        navigation.navigate('Cadastro') //Navega para tela de Cadatro
    }
 }

const CadastrarText = ({ text, onPress}) => {
    return (
        <View style={styles.container}>
            <Text>Você ainda não tem cadastro? </Text>
        <TouchableOpacity onPress={onPress}>
            <Text style={StyleSheet.link}>Cadastre-se</Text>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'green',
        textDecorationLine: 'underline',
    },
    container: {
        flexDirection: 'row', // Alinha os itens na horizontal
        alignItems: 'center', // Alinha os itens verticalmente no centro
      },
});


export default CadastrarText;