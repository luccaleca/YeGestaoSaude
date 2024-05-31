import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebaseAuth, firebaseFirestore } from '../../../config/firebaseConfig';
import { Bell, Plus } from '../../icons/Icons';
import AgendamentoCard from '../Agendamento/AgendamentoCard';
import SideBar from '../Bars/SideBar';
import CategoriaDeAgendamento from '../Agendamento/CategoriaDeAgendamento';

const Agenda = () => {
  const navigation = useNavigation();
  const [agendamentos, setAgendamentos] = useState([]);
  const [filteredAgendamentos, setFilteredAgendamentos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handlePlusPress = () => {
    navigation.navigate('CriarAgendamento');
  };

  const fetchAgendamentos = async () => {
    const userId = firebaseAuth.currentUser?.uid;
    if (!userId) {
      console.error('Usuário não autenticado.');
      return;
    }

    try {
      const agendamentosSnapshot = await firebaseFirestore.collection('usuarios').doc(userId).collection('agendamentos').get();
      const agendamentosList = agendamentosSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAgendamentos(agendamentosList);
      filterAgendamentos(agendamentosList, selectedCategory);
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
    }
  };

  const filterAgendamentos = (agendamentos, category) => {
    const now = new Date();
    let filtered = [];

    if (category === 'Por Vir') {
      filtered = agendamentos.filter(agendamento => new Date(agendamento.data) >= now && agendamento.status !== 'Cancelado');
    } else if (category === 'Feito') {
      filtered = agendamentos.filter(agendamento => new Date(agendamento.data) < now && agendamento.status !== 'Cancelado');
    } else if (category === 'Cancelado') {
      filtered = agendamentos.filter(agendamento => agendamento.status === 'Cancelado');
    } else {
      filtered = agendamentos;
    }

    setFilteredAgendamentos(filtered);
  };

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  useEffect(() => {
    filterAgendamentos(agendamentos, selectedCategory);
  }, [selectedCategory, agendamentos]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <Bell style={styles.icon} />
          <TouchableOpacity style={styles.plusIcon} onPress={handlePlusPress}>
            <Plus style={styles.icon} />
          </TouchableOpacity>
        </View>
        <CategoriaDeAgendamento onCategoryChange={setSelectedCategory} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredAgendamentos.length > 0 ? (
          filteredAgendamentos.map((agendamento) => (
            <AgendamentoCard key={agendamento.id} agendamento={agendamento} onDelete={fetchAgendamentos} />
          ))
        ) : (
          <Text style={styles.emptyText}>Nenhum agendamento encontrado</Text>
        )}
      </ScrollView>
      <View style={styles.sidebar}>
        <SideBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    zIndex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#777',
    marginTop: 20,
  },
  icon: {
    marginLeft: 10,
  },
  plusIcon: {
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Agenda;
