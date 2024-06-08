import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';

const PrincipaisInfoPerfil = () => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [glucoseLevel, setGlucoseLevel] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');

  const userId = firebaseAuth.currentUser?.uid;

  useEffect(() => {
    const fetchHealthInfo = async () => {
      try {
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
      fetchHealthInfo();
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.title}>Última Aferição de Pressão</Text>
          <Text style={styles.value}>{bloodPressure}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>Última Aferição de Glicemia</Text>
          <Text style={styles.value}>{glucoseLevel}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.card}>
          <Text style={styles.title}>Peso e Altura</Text>
          <Text style={styles.value}>{`Peso: ${weight} kg\nAltura: ${height} m`}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.title}>IMC</Text>
          <Text style={styles.value}>{bmi}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5, // Reduzido de 10 para 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5, // Adicionado para reduzir espaço vertical
  },
  card: {
    width: '35%', // Mantém o tamanho dos cards para caberem lado a lado
    backgroundColor: '#fff',
    padding: 10, // Reduzido de 20 para 10
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  title: {
    fontSize: 16, // Reduzido de 18 para 16
    fontWeight: 'bold',
    marginBottom: 5, // Reduzido de 10 para 5
    textAlign: 'center',
  },
  value: {
    fontSize: 14, // Reduzido de 16 para 14
    textAlign: 'center',
  },
});

export default PrincipaisInfoPerfil;
