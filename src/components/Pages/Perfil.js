import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SideBar from '../Bars/SideBar';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';

const { width } = Dimensions.get('window');

const Perfil = () => {
  const [nome, setNome] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const navigation = useNavigation();
  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userDoc = await firebaseFirestore.collection('usuarios').doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          setNome(userData.nome || '');
        }

        const historicoMedicoDoc = await firebaseFirestore.collection('usuarios').doc(userId).collection('historico_medico').doc('info').get();
        if (historicoMedicoDoc.exists) {
          const data = historicoMedicoDoc.data();
          setBloodPressure(data.afericaoPressao || '');
          setGlucoseLevel(data.glicemia || '');
          setBmi(data.imc || '');
        }

        const dadosPessoaisDoc = await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').get();
        if (dadosPessoaisDoc.exists) {
          const data = dadosPessoaisDoc.data();
          setWeight(data.peso || '');
          setHeight(data.altura || '');
        }
      } catch (error) {
        console.error('Erro ao buscar informações de saúde:', error);
      }
    };

    if (userId) {
      fetchUserInfo();
    }
  }, [userId]);

  const handleLogout = () => {
    Alert.alert(
      'Sair',
      'Tem certeza que deseja sair?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sair', onPress: () => navigation.navigate('Login'), style: 'destructive' }
      ],
      { cancelable: true }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.profileName}>{nome}</Text>
      </View>
      <View style={styles.healthInfoContainer}>
        <View style={styles.healthInfoItem}>
          <Text style={styles.healthInfoTitle}>Pressão</Text>
          <Text style={styles.healthInfoValue}>{bloodPressure}</Text>
        </View>
        <View style={styles.healthInfoItem}>
          <Text style={styles.healthInfoTitle}>Glicemia</Text>
          <Text style={styles.healthInfoValue}>{glucoseLevel}</Text>
        </View>
        <View style={styles.healthInfoItem}>
          <Text style={styles.healthInfoTitle}>Altura</Text>
          <Text style={styles.healthInfoValue}>{height} m</Text>
        </View>
        <View style={styles.healthInfoItem}>
          <Text style={styles.healthInfoTitle}>Peso</Text>
          <Text style={styles.healthInfoValue}>{weight} kg</Text>
        </View>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DadosPessoais')}>
          <Text style={styles.buttonText}>Dados pessoais</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DocumentoIdentidade')}>
          <Text style={styles.buttonText}>Documento de identidade</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('HistoricoMedico')}>
          <Text style={styles.buttonText}>Histórico médico</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Medicamentos')}>
          <Text style={styles.buttonText}>Medicamentos</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
          <Text style={[styles.buttonText, styles.logoutButtonText]}>Sair</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Fundo branco para toda a tela
  },
  header: {
    backgroundColor: '#199A8E',
    padding: 15,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 3,
    shadowColor: 'black',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  healthInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  healthInfoItem: {
    width: '48%', // Ajusta a largura para dois itens por linha
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  healthInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#199A8E',
    marginBottom: 5,
  },
  healthInfoValue: {
    fontSize: 16,
    color: '#199A8E',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E8F3F1',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#199A8E',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#199A8E',
  },
  arrow: {
    fontSize: 20,
    color: '#199A8E',
  },
  logoutButton: {
    backgroundColor: '#E8F3F1',
  },
  logoutButtonText: {
    color: '#FF0000',
  },
});

export default Perfil;
