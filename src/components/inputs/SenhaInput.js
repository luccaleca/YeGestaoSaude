import React, { useState } from "react";
import { StyleSheet, TextInput, View, TouchableOpacity } from "react-native";
import { MyIcon, EyeOffIcon } from "../../utils/icons/Icons";

function SenhaInput() {
    const [password, setPassword] = useState("");
    const [hidePassword, setHidePassword] = useState(true);

    const handlePasswordChange = (text) => {
        setPassword(text);
    };

    const togglePasswordVisibility = () => {
        setHidePassword(!hidePassword);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Digite sua senha"
                value={password}
                onChangeText={handlePasswordChange}
                secureTextEntry={hidePassword}
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
            />
            <View style={styles.iconContainer}>   
                <MyIcon style={styles.myIcon} /> 
            </View>
            <TouchableOpacity style={styles.iconSenhaContainer} onPress={togglePasswordVisibility}>   
               {hidePassword ? <MyIcon style={styles.myIcon} /> : <EyeOffIcon style={styles.myIcon} />} 
            </TouchableOpacity>  
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
    },
    iconSenhaContainer: {
        position: "absolute",
        right: 30,
        top: 4,
        backgroundColor: 'yellow',
        borderWidth: 1,
        borderColor: 'black'
    },
    myIcon: {
        marginLeft: 10,
    }
});

export default SenhaInput;
