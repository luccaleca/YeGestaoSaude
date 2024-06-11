import { firebaseAuth, firebaseFirestore } from './firebaseConfig';

const registerUser = async (email, password, nome) => {
  try {
    const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    await firebaseFirestore.collection('usuarios').doc(user.uid).set({
      email: user.email,
      nome: nome,
    });

    console.log('Usuário registrado com sucesso:', user.uid);
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
};

export { registerUser };
