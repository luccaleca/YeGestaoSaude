import { firebaseFirestore } from '../firebaseConfig';

const inserirDadosPessoais = async (userId, dadosPessoais) => {
  try {
    await firebaseFirestore.collection('usuarios').doc(userId).collection('dados_pessoais').doc('info').set(dadosPessoais);
    console.log('Dados pessoais adicionados com sucesso:', userId);
  } catch (error) {
    console.error('Erro ao adicionar dados pessoais:', error);
    throw error;
  }
};

export default inserirDadosPessoais;
