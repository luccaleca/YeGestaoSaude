import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Modal, Button, Alert } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import SideBar from '../Bars/SideBar';
import AddDocumentosButton from '../Buttons/AddDocumentosButton';
import { firebaseFirestore, firebaseAuth } from '../../../config/firebaseConfig';
import InserirDocumentos from '../../../config/Inserir/InserirDocumentos';

const Documentos = () => {
  const [documentos, setDocumentos] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchDocumentos = async () => {
    const user = firebaseAuth.currentUser;
    if (!user) {
      console.error('Usuário não autenticado.');
      return;
    }

    try {
      const documentosSnapshot = await firebaseFirestore.collection('usuarios').doc(user.uid).collection('documentos').get();
      const documentosList = documentosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDocumentos(documentosList);
    } catch (error) {
      console.error('Erro ao buscar documentos:', error);
    }
  };

  useEffect(() => {
    fetchDocumentos();
  }, []);

  const handleDocumentAdded = () => {
    fetchDocumentos();
  };

  const openModal = (url) => {
    setSelectedImage(url);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  const deleteDocument = async (id) => {
    const user = firebaseAuth.currentUser;
    if (!user) {
      console.error('Usuário não autenticado.');
      return;
    }

    try {
      await firebaseFirestore.collection('usuarios').doc(user.uid).collection('documentos').doc(id).delete();
      Alert.alert('Sucesso', 'Documento deletado com sucesso.');
      fetchDocumentos();
    } catch (error) {
      console.error('Erro ao deletar documento:', error);
      Alert.alert('Erro', 'Não foi possível deletar o documento.');
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      'Deletar Documento',
      'Tem certeza que deseja deletar este documento?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Deletar', onPress: () => deleteDocument(id) },
      ],
      { cancelable: false }
    );
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
          </>
        ) : (
          <ScrollView style={styles.documentList}>
            {documentos.map(doc => (
              <View key={doc.id} style={styles.documentContainer}>
                <TouchableOpacity style={styles.documentContent} onPress={() => openModal(doc.url)}>
                  <Text style={styles.documentText}>{doc.customName || 'Documento sem Nome'}</Text>
                </TouchableOpacity>
                <Menu>
                  <MenuTrigger>
                    <Text style={styles.menuTrigger}>⋮</Text>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption onSelect={() => confirmDelete(doc.id)} text='Deletar' />
                  </MenuOptions>
                </Menu>
              </View>
            ))}
          </ScrollView>
        )}
        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              {selectedImage && (
                <Image source={{ uri: selectedImage }} style={styles.image} />
              )}
              <Button title="Fechar" onPress={closeModal} />
            </View>
          </View>
        </Modal>
        <AddDocumentosButton onDocumentAdded={handleDocumentAdded} />
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
    backgroundColor: '#f0f0f0',
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
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
});

export default Documentos;
