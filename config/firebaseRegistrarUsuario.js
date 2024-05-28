import { firebaseAuth, firebaseFirestore } from './firebaseConfig';

const registerUser = async (email, password) => {
  try {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Adicionar email ao documento do usuário no Firestore
    await firebaseFirestore.collection('usuarios').doc(user.uid).set({
      email: user.email,
    });

    console.log('Usuário registrado com sucesso:', user.uid);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export { registerUser };