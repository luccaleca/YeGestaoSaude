import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { EmailIcon, CheckIcon } from "../../icons/Icons";

function EmailInput({ value, setEmail }) {
  const [email, setEmailState] = useState(value);

  const handleEmailChange = (text) => {
    setEmailState(text);
    setEmail(text); // Atualiza o estado no componente pai
  };

  const isEmailValid = (email) => {
    // Regex simples para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <View style={[styles.container, isEmailValid(email) && styles.validInputContainer]}>
      <View style={styles.iconContainer}>
        <EmailIcon style={styles.EmailIcon} />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCompleteType="email"
        autoCorrect={false}
        placeholderTextColor="#8e8e93"
      />
      {isEmailValid(email) && (
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
    borderColor: 'green', // Define a cor da borda para verde se o email for válido
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

export default EmailInput;
