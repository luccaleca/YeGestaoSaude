import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SideBar from '../../Bars/SideBar';
import CarteirinhaConvenio from './CarteirinhaConvenio';
import ProximasConsultas from './ProximasConsultas';
import ArtigosSaude from './ArtigosSaude';
import { firebaseFirestore } from '../../../../config/firebaseConfig';

const Menu = ({ route }) => {
  const navigation = useNavigation();
  const userId = route.params?.userId;
  const [userName, setUserName] = useState('');
  const [agendamentos, setAgendamentos] = useState([]);

  useEffect(() => {
    if (userId) {
      const fetchUserName = async () => {
        try {
          const userDoc = await firebaseFirestore.collection('usuarios').doc(userId).get();
          if (userDoc.exists) {
            const fullName = userDoc.data().nome;
            const firstName = fullName.split(' ')[0];
            setUserName(firstName);
          } else {
            console.error('Documento de usuário não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar nome do usuário:', error);
        }
      };

      const fetchAgendamentos = async () => {
        try {
          const now = new Date();
          console.log('Data atual:', now); // Log para verificar a data atual

          const agendamentosSnapshot = await firebaseFirestore
            .collection('usuarios')
            .doc(userId)
            .collection('agendamentos')
            .get();

          const agendamentosList = agendamentosSnapshot.docs.map(doc => {
            const data = new Date(doc.data().data); // Convertendo string para Date
            return {
              id: doc.id,
              nomeEspecialista: doc.data().nomeEspecialista,
              especialidade: doc.data().especialidade,
              data: data,
              dataString: data.toLocaleDateString(), // Para exibir no componente
              horario: doc.data().horario,
            };
          });

          // Filtrando e ordenando os agendamentos
          const proximosAgendamentos = agendamentosList
            .filter(agendamento => agendamento.data >= now)
            .sort((a, b) => a.data - b.data)
            .slice(0, 2); // Pegando os 3 primeiros

          console.log('Agendamentos filtrados e ordenados:', proximosAgendamentos); // Log para verificar os agendamentos
          setAgendamentos(proximosAgendamentos);
        } catch (error) {
          console.error('Erro ao buscar agendamentos:', error);
        }
      };

      fetchUserName();
      fetchAgendamentos();
    }
  }, [userId]);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Olá, {userName}</Text>
        </View>
        <CarteirinhaConvenio userId={userId} />
        <ProximasConsultas agendamentos={agendamentos} />
        <ArtigosSaude />
      </ScrollView>
      <SideBar style={styles.sidebar} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    alignItems: 'flex-start',
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  header: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sidebar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
  },
});

export default Menu;
