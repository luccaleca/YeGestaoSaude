import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SquareIcon, CheckSquareIcon } from "../../icons/Icons";

const TermosServico = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const navigation = useNavigation();

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
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
                {isChecked ? <CheckSquareIcon /> : <SquareIcon />}
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <Text>Eu aceito os </Text>
                <TouchableOpacity onPress={handleTermsPress}>
                    <Text style={styles.link}>Termos de Serviço</Text>
                </TouchableOpacity>
                <Text> e as </Text>
                <TouchableOpacity onPress={handlePrivacyPress}>
                    <Text style={styles.link}>Políticas de Privacidade</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default TermosServico;
