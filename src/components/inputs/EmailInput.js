import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { MyIcon } from "../../icons/Icons";

function EmailInput() {
    const [email, setEmail] = useState("");

    const handleEmailChange = (text) => {
        setEmail(text);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                value={email}
                onChangeText={handleEmailChange}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
            /> 
            <View style={ styles.iconContainer}>   
                <MyIcon style={styles.myIcon} /> 
            </View>  
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "black",
        paddingLeft: 40,
        borderRadius: 5, 
        paddingHorizontal: 10,
    },
    iconContainer: {
        position: "absolute",
        left: 5,
        top: 4,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'black'
    }
});

export default EmailInput;
