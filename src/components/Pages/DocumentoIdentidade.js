import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Alert, TextInput } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { useNavigation } from '@react-navigation/native';
import SideBar from '../Bars/SideBar';
import { firebaseAuth, firebaseStorage } from '../../../config/firebaseConfig';
import AddDocumentosIdentidadeButton from '../Buttons/AddDocumentosIdentidadeButton';

const DocumentoIdentidade = () => {
  const [documentos, setDocumentos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [renameVisible, setRenameVisible] = useState(false);
  const [newName, setNewName] = useState('');
  const [currentDocId, setCurrentDocId] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    fetchDocumentos();
  }, []);

  const fetchDocumentos = async () => {
    const user = firebaseAuth.currentUser;
    if (!user) {
      console.error('Usuário não autenticado.');
      return;
    }

    const storageRef = firebaseStorage.ref().child(`documentos_identidade/${user.uid}`);
    const documentosList = [];

    storageRef.listAll().then((result) => {
      result.items.forEach(async (itemRef) => {
        const url = await itemRef.getDownloadURL();
        documentosList.push({ url, name: itemRef.name });
        setDocumentos([...documentosList]);
      });
    }).catch((error) => {
      console.error('Erro ao listar documentos:', error);
    });
  };

  const openModal = (url) => {
    navigation.navigate('ImagemIdentidade', { imageUrl: url });
  };

  const openRenameModal = (id, currentName) => {
    setCurrentDocId(id);
    setNewName(currentName);
    setRenameVisible(true);
  };

  const handleRename = () => {
    if (newName.trim() === '') {
      Alert.alert('Erro', 'O nome não pode estar vazio.');
      return;
    }

    const updatedDocumentos = documentos.map(doc => {
      if (doc.id === currentDocId) {
        return { ...doc, name: newName };
      }
      return doc;
    });

    setDocumentos(updatedDocumentos);
    setRenameVisible(false);
    setNewName('');
  };

  const handleDelete = (fileName) => {
    const user = firebaseAuth.currentUser;
    if (!user) {
      Alert.alert('Erro', 'Usuário não autenticado.');
      return;
    }

    const storageRef = firebaseStorage.ref().child(`documentos_identidade/${user.uid}/${fileName}`);

    storageRef.delete().then(() => {
      setDocumentos(documentos.filter(doc => doc.name !== fileName));
      Alert.alert('Sucesso', 'Documento excluído com sucesso.');
    }).catch((error) => {
      Alert.alert('Erro', 'Não foi possível excluir o documento.');
      console.error('Erro ao excluir documento:', error);
    });
  };

  const handlePressAddDocument = () => {
    fetchDocumentos();
  };

  return (
    <MenuProvider>
      <View style={styles.container}>
        {documentos.length === 0 ? (
          <>
            <Image
              source={require('../../../assets/images/SemDocumento.png')}
              style={styles.semDocumento}
            />
            <Text style={styles.text}>Quando você adicionar seus documentos, eles estarão seguros aqui</Text>
            <AddDocumentosIdentidadeButton onDocumentAdded={handlePressAddDocument} />
          </>
        ) : (
          <ScrollView style={styles.documentList}>
            {documentos.map((doc, index) => (
              <View key={index} style={styles.documentContainer}>
                <TouchableOpacity style={styles.documentContent} onPress={() => openModal(doc.url)}>
                  <Text style={styles.documentText}>{doc.name || 'Documento sem Nome'}</Text>
                </TouchableOpacity>
                <Menu>
                  <MenuTrigger>
                    <Text style={styles.menuTrigger}>⋮</Text>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption onSelect={() => openRenameModal(doc.id, doc.name)} text='Renomear' />
                    <MenuOption onSelect={() => handleDelete(doc.name)} text='Excluir' />
                  </MenuOptions>
                </Menu>
              </View>
            ))}
            <TouchableOpacity style={styles.button} onPress={handlePressAddDocument}>
              <Text style={styles.buttonText}>Adicionar Documento</Text>
            </TouchableOpacity>
          </ScrollView>
        )}
        <Modal visible={renameVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Renomear Documento</Text>
              <TextInput
                style={styles.input}
                placeholder="Novo nome"
                value={newName}
                onChangeText={setNewName}
              />
              <View style={styles.modalButtonContainer}>
                <TouchableOpacity style={styles.modalButton} onPress={handleRename}>
                  <Text style={styles.modalButtonText}>Renomear</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButton} onPress={() => setRenameVisible(false)}>
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <SideBar />
      </View>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  semDocumento: {
    marginBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 20,
  },
  documentList: {
    width: '100%',
    padding: 20,
  },
  documentContainer: {
    flexDirection: 'row',
    backgroundColor: '#E8F3F1',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  documentContent: {
    flex: 1,
    alignItems: 'center',
  },
  documentText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuTrigger: {
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#199A8E',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#E8F3F1',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    backgroundColor: '#199A8E',
    borderRadius: 10,
    padding: 12,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#199A8E',
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

export default DocumentoIdentidade;
