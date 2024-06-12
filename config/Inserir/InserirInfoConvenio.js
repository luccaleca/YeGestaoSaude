// FirebaseInfoConvenio.js
import firestore from '@react-native-firebase/firestore';

const InserirInfoConvenio = async (userId, planType, cardNumber, validity, cardImageUrl) => {
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
      cardImageUrl: cardImageUrl,
    }, { merge: true });

    console.log('Informações do convênio salvas com sucesso');
  } catch (error) {
    console.error('Erro ao salvar informações do convênio:', error);
    throw error;
  }
};

export { InserirInfoConvenio };
