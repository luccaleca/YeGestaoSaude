import { firebaseFirestore } from '../firebaseConfig';

const inserirMedicamentos = async (userId, medicamentos) => {
  try {
    await firebaseFirestore.collection('usuarios').doc(userId).collection('medicamentos').doc('info').set(medicamentos);
    console.log('Medicamentos adicionados com sucesso:', userId);
  } catch (error) {
    console.error('Erro ao adicionar medicamentos:', error);
    throw error;
  }
};

export { inserirMedicamentos };
