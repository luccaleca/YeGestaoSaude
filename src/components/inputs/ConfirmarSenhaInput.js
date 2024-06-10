import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { EyeOffIcon, EyeIcon, LockIcon, CheckIcon } from "../../icons/Icons";

const ConfirmarSenhaInput = ({ setConfirmPassword, password }) => {
    const [confirmPassword, setConfirmPasswordState] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const handleConfirmPasswordChange = (text) => {
        setConfirmPasswordState(text);
        setConfirmPassword(text);  // Atualiza a senha de confirmação no estado do componente pai
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    const isPasswordValid = (confirmPassword) => {
        return password !== "" && confirmPassword !== "" && confirmPassword === password;
    };

    return (
        <View style={[styles.container, isPasswordValid(confirmPassword) && styles.validInputContainer]}>
            <View style={styles.iconContainer}>
                <LockIcon style={styles.icon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Confirme sua senha"
                value={confirmPassword}
                onChangeText={handleConfirmPasswordChange}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                placeholderTextColor="#8e8e93"
            />
            {isPasswordValid(confirmPassword) && (
                <View style={styles.iconContainer}>
                    <CheckIcon style={styles.icon} />
                </View>
            )}
            <TouchableOpacity style={styles.iconSenhaContainer} onPress={togglePasswordVisibility}>
                {hidePassword ? <EyeOffIcon style={styles.icon} /> : <EyeIcon style={styles.icon} />}
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
        paddingVertical: 8,
        paddingHorizontal: 20,
        marginVertical: 10,
        width: '100%',
    },
    validInputContainer: {
        borderColor: 'green', // Define a cor da borda para verde se a senha for válida
    },
    input: {
        flex: 1,
        paddingLeft: 10,
        fontSize: 14,
        height: 40,
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconSenhaContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        marginLeft: 10,
    },
});

export default ConfirmarSenhaInput;
