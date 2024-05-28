import { firebaseFirestore } from './firebaseConfig';

const addUserData = async (userId, dadosPessoais, historicoMedico, medicamentos, agendamentos) => {
  try {
    // Adicionar dados pessoais ao Firestore
    await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').set(dadosPessoais);

    // Adicionar histórico médico ao Firestore
    await firebaseFirestore.collection('usuarios').doc(userId).collection('historico_medico').doc('info').set(historicoMedico);

    // Adicionar medicamentos ao Firestore
    await firebaseFirestore.collection('usuarios').doc(userId).collection('medicamentos').doc('info').set(medicamentos);

    // Adicionar agendamentos ao Firestore
    const agendamentosCollection = firebaseFirestore.collection('usuarios').doc(userId).collection('agendamentos');
    for (const agendamento of agendamentos) {
      await agendamentosCollection.add(agendamento);
    }

    console.log('Dados do usuário adicionados com sucesso:', userId);
  } catch (error) {
    console.error('Erro ao adicionar dados do usuário:', error);
    throw error;
  }
};

export { addUserData };
