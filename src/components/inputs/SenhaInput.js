import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { EyeOffIcon, LockIcon, EyeIcon } from "../../icons/Icons";

function SenhaInput({ setPassword }) {
    const [password, setPasswordState] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const handlePasswordChange = (text) => {
        setPasswordState(text);
        setPassword(text);  // Atualiza o estado no componente pai
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <LockIcon style={styles.LockIcon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                placeholderTextColor="#8e8e93" // Cor do placeholder para melhor visibilidade
            />
            <TouchableOpacity style={styles.iconSenhaContainer} onPress={togglePasswordVisibility}>
                {hidePassword ? <EyeOffIcon style={styles.Icons} /> : <EyeIcon style={styles.Icons} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 25,
        paddingVertical: 8, // Diminuir o padding vertical
        paddingHorizontal: 20,
        marginVertical: 10,
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 14, // Ajustar o tamanho da fonte para legibilidade
        height: 40, // Ajustar a altura do input para manter o placeholder visível
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSenhaContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Icons: {
        // Adicione estilos adicionais para o ícone, se necessário
    }
});

export default SenhaInput;
