import { firebaseFirestore } from '../firebaseConfig';

const inserirAgendamento = async (agendamento) => {
  try {
    // Adicionar o agendamento à coleção 'agendamentos' dentro do documento do usuário
    await firebaseFirestore.collection('usuarios').doc(agendamento.userId).collection('agendamentos').add({
      nomeEspecialista: agendamento.nomeEspecialista,
      especialidade: agendamento.especialidade,
      data: agendamento.data,
      horario: agendamento.horario,
      razao: agendamento.razao,
    });
    console.log('Agendamento adicionado com sucesso:', agendamento);
  } catch (error) {
    console.error('Erro ao adicionar agendamento:', error);
    throw error;
  }
};

export default inserirAgendamento;
