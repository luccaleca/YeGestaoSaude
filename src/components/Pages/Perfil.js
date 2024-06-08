import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import SideBar from '../Bars/SideBar';
import ProfileBar from '../Bars/ProfileBar';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';

const { width } = Dimensions.get('window');

const Perfil = () => {
  const [nome, setNome] = useState('');
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Fetching user name
        const userDoc = await firebaseFirestore.collection('usuarios').doc(userId).get();
        if (userDoc.exists) {
          const userData = userDoc.data();
          setNome(userData.nome || '');
        }

        // Fetching blood pressure, glucose level, and BMI from HistoricoMedico
        const historicoMedicoDoc = await firebaseFirestore.collection('usuarios').doc(userId).collection('historico_medico').doc('info').get();
        if (historicoMedicoDoc.exists) {
          const data = historicoMedicoDoc.data();
          setBloodPressure(data.afericaoPressao || '');
          setGlucoseLevel(data.glicemia || '');
          setBmi(data.imc || '');
        }

        // Fetching weight and height from DadosPessoais
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

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: 'https://example.com/profile.jpg' }} // Altere para a URL real da imagem de perfil
        />
        <Text style={styles.profileName}>{nome}</Text>
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
      </View>
      <View style={styles.content}>
        <ProfileBar style={styles.profileBar} />
      </View>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#00C6FF', 
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  healthInfoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
  },
  healthInfoItem: {
    width: '48%', // Ajusta a largura para dois itens por linha
    backgroundColor: '#fff',
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  healthInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00C6FF',
    marginBottom: 5,
  },
  healthInfoValue: {
    fontSize: 16,
    color: '#00C6FF',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end', // Move o ProfileBar para o final da tela
    paddingHorizontal: 20,
  },
  profileBar: {
    width: width, // Faz o ProfileBar ocupar a largura total da tela
  },
});

export default Perfil;
