import firestore from '@react-native-firebase/firestore';

const InserirInfoConvenio = async (userId, planType, cardNumber, validity) => {
  try {
    const convenioRef = firestore()
      .collection('usuarios')
      .doc(userId)
      .collection('carteirinhaConvenio')
      .doc('info');

    await convenioRef.set({
      planType: planType,
      cardNumber: cardNumber,
      validity: validity,
    }, { merge: true });  // Utilize merge para atualizar os campos existentes sem criar um novo documento

    console.log('Informações do convênio salvas com sucesso');
  } catch (error) {
    console.error('Erro ao salvar informações do convênio:', error);
    throw error;
  }
};

export { InserirInfoConvenio };
