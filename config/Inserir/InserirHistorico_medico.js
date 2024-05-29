import { firebaseFirestore } from '../firebaseConfig';

const inserirHistoricoMedico = async (userId, historicoMedico) => {
  try {
    await firebaseFirestore.collection('usuarios').doc(userId).collection('historico_medico').doc('info').set(historicoMedico);
    console.log('Histórico médico adicionado com sucesso:', userId);
  } catch (error) {
    console.error('Erro ao adicionar histórico médico:', error);
    throw error;
  }
};

export default inserirHistoricoMedico;
