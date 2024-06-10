import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { UserIcon, CheckIcon } from "../../icons/Icons";

function NameInput() {
    const [name, setName] = useState("");

    const handleNameChange = (text) => {
        setName(text);
    };

    const isNameValid = (name) => {
        // Validação simples para nome (pode ser adaptada conforme necessário)
        return name.length > 2; // Exemplo: Nome deve ter mais de 2 caracteres
    };

    return (
        <View style={[styles.container, isNameValid(name) && styles.validInputContainer]}>
            <View style={styles.iconContainer}>
                <UserIcon style={styles.icon} />
            </View>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={handleNameChange}
                keyboardType="default"
                autoCapitalize="words"
                autoCompleteType="name"
                autoCorrect={false}
                placeholderTextColor="#8e8e93"
            />
            {isNameValid(name) && (
                <View style={styles.iconContainer}>
                    <CheckIcon style={styles.icon} />
                </View>
            )}
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
        borderColor: 'green', // Define a cor da borda para verde se o nome for válido
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
    icon: {
        marginLeft: 10,
    },
});

export default NameInput;
