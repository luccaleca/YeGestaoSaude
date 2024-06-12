import { firebaseStorage, firebaseAuth } from '../firebaseConfig';

const InserirDocumentosIdentidade = async (uri, fileName, customName) => {
  const user = firebaseAuth.currentUser;
  if (!user) {
    throw new Error('Usuário não autenticado.');
  }

  const response = await fetch(uri);
  const blob = await response.blob();
  const storageRef = firebaseStorage.ref().child(`documentos_identidade/${user.uid}/${customName || fileName}`);

  const uploadTask = storageRef.put(blob);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed',
      (snapshot) => {
        // Progresso do upload
      },
      (error) => {
        console.error('Erro ao fazer upload do documento:', error);
        reject(error);
      },
      async () => {
        const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
        console.log('URL do documento:', downloadURL);
        resolve(downloadURL);
      }
    );
  });
};

export default InserirDocumentosIdentidade;
