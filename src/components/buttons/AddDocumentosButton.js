import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import InserirDocumentos from '../../../config/Inserir/InserirDocumentos';

const AddDocumentosButton = ({ onDocumentAdded }) => {
  const handleUpload = async (uri, fileName, customName) => {
    console.log(`Uploading file: ${fileName} with custom name: ${customName} from URI: ${uri}`);
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
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert('Ação cancelada');
      } else if (response.errorCode) {
        Alert.alert('Erro', response.errorMessage);
      } else {
        const { uri } = response.assets[0];
        const fileName = `photo_${Date.now()}.jpg`;
        console.log(`Photo taken: ${uri}`);
        promptForFileName(uri, fileName);
      }
    });
  };

  const handleChoosePhoto = () => {
    const options = {
      mediaType: 'photo',
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Ação cancelada');
      } else if (response.errorCode) {
        Alert.alert('Erro', response.errorMessage);
      } else {
        const { uri } = response.assets[0];
        const fileName = `photo_${Date.now()}.jpg`;
        console.log(`Photo selected: ${uri}`);
        promptForFileName(uri, fileName);
      }
    });
  };

  const promptForFileName = (uri, fileName) => {
    Alert.prompt(
      'Nome do Documento',
      'Por favor, insira um nome para o documento',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: (customName) => handleUpload(uri, fileName, customName),
        },
      ],
      'plain-text'
    );
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
