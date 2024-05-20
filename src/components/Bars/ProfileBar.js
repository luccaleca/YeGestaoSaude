import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ConfirmModal from '../Modals/ConfirmModal';

const ProfileBar = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handlePersonalDataPress = () => {
    navigation.navigate('DadosPessoais');
  };

  const handleIdentityDocumentPress = () => {
    navigation.navigate('DocumentoIdentidade');
  };

  const handleMedicalHistoryPress = () => {
    navigation.navigate('HistoricoMedico');
  };

  const handleMedicationPress = () => {
    navigation.navigate('Medicamentos');
  };

  const handleLogoutPress = () => {
    setModalVisible(true);
  };

  const handleConfirmLogout = () => {
    setModalVisible(false);
    navigation.navigate('Login'); // Navegação de volta para a tela de login
  };

  const handleCancelLogout = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.item} onPress={handlePersonalDataPress}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>Dados Pessoais</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleIdentityDocumentPress}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>Documento de Identidade</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleMedicalHistoryPress}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>Histórico Médico</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleMedicationPress}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>Medicamentos</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.item} onPress={handleLogoutPress}>
        <View style={styles.itemContent}>
          <Text style={styles.itemText}>Sair</Text>
          <Text style={styles.arrow}>{'>'}</Text>
        </View>
      </TouchableOpacity>
      <ConfirmModal
        visible={modalVisible}
        onCancel={handleCancelLogout}
        onConfirm={handleConfirmLogout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: '#f8f9fa',
    paddingVertical: 20,
  },
  item: {
    width: '100%',
    backgroundColor: '#007bff',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
  },
  itemContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileBar;
