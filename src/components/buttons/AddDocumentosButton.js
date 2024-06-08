import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import InserirDocumentos from '../../../config/Inserir/InserirDocumentos';

const AddDocumentosButton = ({ onDocumentAdded }) => {
  const handleUpload = async (uri, fileName) => {
    const customName = `Custom_${fileName}`;
    try {
      await InserirDocumentos(uri, fileName, customName);
      Alert.alert('Sucesso', 'Documento adicionado com sucesso.');
      onDocumentAdded(); // Chamar callback para atualizar a lista de documentos
    } catch (error) {
      console.error('Erro ao fazer upload do documento:', error);
      Alert.alert('Erro', 'Não foi possível adicionar o documento.');
    }
  };

  const handleTakePhoto = () => {
    const options = {
      mediaType: 'photo',
      cameraType: 'back',
      saveToPhotos: true,
    };

    launchCamera(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Ação cancelada');
      } else if (response.errorCode) {
        Alert.alert('Erro', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const { uri, fileName } = response.assets[0];
        handleUpload(uri, fileName || `photo_${Date.now()}.jpg`);
      }
    });
  };

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        Alert.alert('Ação cancelada');
      } else if (response.errorCode) {
        Alert.alert('Erro', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const { uri, fileName } = response.assets[0];
        handleUpload(uri, fileName || `photo_${Date.now()}.jpg`);
      }
    });
  };

  const handlePress = () => {
    Alert.alert(
      'Adicionar Documento',
      'Escolha uma opção',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Tirar Foto', onPress: handleTakePhoto },
        { text: 'Fazer Upload de Foto', onPress: handleChoosePhoto },
      ],
      { cancelable: true }
    );
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Adicionar Documento</Text>
    </TouchableOpacity>
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
});

export default AddDocumentosButton;
