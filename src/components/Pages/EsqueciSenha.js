import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import EmailInput from '../Inputs/EmailInput';
import { CheckIcon, PhoneIcon } from '../../icons/Icons'; // Importando os ícones necessários
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando ícone de seta para voltar
import { enviarEmailRedefinicao, enviarCodigoRedefinicaoTelefone } from '../../../config/firebaseEsqueciSenha'; // Importando as funções de redefinição de senha

const { width } = Dimensions.get('window');

const EsqueciSenha = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [useEmail, setUseEmail] = useState(true); // Alternar entre email e telefone
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleResetPasswordPress = async () => {
    try {
      if (useEmail) {
        const message = await enviarEmailRedefinicao(email);
        setSuccessMessage(message);
      } else {
        const message = await enviarCodigoRedefinicaoTelefone(phone);
        setSuccessMessage(message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[1-9]{2}9[0-9]{8}$/;
    return phoneRegex.test(phoneNumber);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Esqueceu sua senha?</Text>
        <Text style={styles.subtitle}>
          Insira seu email ou número de telefone, enviaremos um código de confirmação.
        </Text>
        <View style={styles.toggleContainer}>
          <TouchableOpacity style={[styles.toggleButton, useEmail && styles.activeToggle]} onPress={() => setUseEmail(true)}>
            <Text style={[styles.toggleText, useEmail && styles.activeToggleText]}>Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.toggleButton, !useEmail && styles.activeToggle]} onPress={() => setUseEmail(false)}>
            <Text style={[styles.toggleText, !useEmail && styles.activeToggleText]}>Telefone</Text>
          </TouchableOpacity>
        </View>
        {useEmail ? (
          <EmailInput value={email} setEmail={setEmail} style={styles.input} />
        ) : (
          <View style={[styles.inputContainer, isPhoneNumberValid(phone) && styles.validInputContainer]}>
            <View style={styles.iconContainer}>
              <PhoneIcon style={styles.icon} />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Digite seu telefone"
              value={phone}
              onChangeText={setPhone}
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#8e8e93"
            />
            {isPhoneNumberValid(phone) && (
              <View style={styles.iconContainer}>
                <CheckIcon style={styles.icon} />
              </View>
            )}
          </View>
        )}
        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
        {successMessage && <Text style={styles.successText}>{successMessage}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleResetPasswordPress}>
          <Text style={styles.buttonText}>Enviar Código</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 80, // Ajuste este valor para mover os componentes para cima
    paddingBottom: 20, // Adicionando padding inferior para melhorar o layout
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40, // Ajuste conforme necessário
    left: 20, // Ajuste conforme necessário
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#8e8e93',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    marginHorizontal: 5,
  },
  activeToggle: {
    backgroundColor: '#E0E0E0',
  },
  toggleText: {
    fontSize: 16,
    color: '#8e8e93',
  },
  activeToggleText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '100%',
  },
  validInputContainer: {
    borderColor: 'green', // Define a cor da borda para verde se o número for válido
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
  button: {
    backgroundColor: '#649c80',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    marginBottom: 10,
  },
});

export default EsqueciSenha;
