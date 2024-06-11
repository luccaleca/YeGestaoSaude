import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProximasConsultas = ({ agendamentos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.consultasHeader}>
        <Text style={styles.consultasTitle}>Próximas Consultas</Text>
      </View>
      <View style={styles.consultasContainer}>
        {agendamentos.map((agendamento, index) => (
          <View key={index} style={styles.consultaBox}>
            <Text style={styles.consultaText}>
              <Text style={styles.label}>Dr(a). </Text>{agendamento.nomeEspecialista}
            </Text>
            <Text style={styles.consultaText}>
              <Text style={styles.label}>Especialidade: </Text>{agendamento.especialidade}
            </Text>
            <Text style={styles.consultaText}>
              <Text style={styles.label}>Dia: </Text>{agendamento.dataString}
            </Text>
            <Text style={styles.consultaText}>
              <Text style={styles.label}>Horário: </Text>{agendamento.horario}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  consultasHeader: {
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  consultasTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  consultasContainer: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  consultaBox: {
    width: '48%', // Ajuste para garantir que dois contêineres caibam lado a lado
    backgroundColor: '#FFFFFF', // Define o fundo branco para os contêineres
    borderRadius: 10,
    borderWidth: 1, // Adiciona uma linha de contorno
    borderColor: '#E8E8E8', // Cor da linha de contorno
    padding: 10, // Adiciona um padding para o conteúdo interno
    marginBottom: 10, // Adicionado para espaçamento entre as linhas
  },
  consultaText: {
    fontSize: 12, // Reduzido para melhor ajuste
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ProximasConsultas;
