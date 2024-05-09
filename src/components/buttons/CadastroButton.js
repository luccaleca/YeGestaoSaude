import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, Text, Modal, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CadastroButton = ({ onPress, }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setModalVisible(true); // Torna o modal visível ao pressionar o botão
    if (onPress) onPress(); // Chama a função onPress passada como prop, se existir
  };

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Sucesso! Sua conta foi registrada com sucesso.</Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo preto transparente
  },
  modalContent: {
    backgroundColor: '#FFFFFF', // Fundo branco
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#007AFF',
    borderRadius: 50,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
});

export default CadastroButton;
