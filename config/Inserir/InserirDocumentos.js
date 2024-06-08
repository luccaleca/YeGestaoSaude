import { firebaseStorage, firebaseFirestore, firebaseAuth } from '../firebaseConfig';
import firestore from '@react-native-firebase/firestore';

const InserirDocumentos = async (uri, fileName, customName) => {
  const user = firebaseAuth.currentUser;

  if (!user) {
    console.error('Usuário não autenticado.');
    throw new Error('Usuário não autenticado.');
  }

  const reference = firebaseStorage.ref(`fotos/${user.uid}/${fileName}`);

  const response = await fetch(uri);
  const blob = await response.blob();

  const fileExtension = fileName.split('.').pop();
  const contentTypeMap = {
    jpg: 'image/jpeg',
    jpeg: 'image/jpeg',
    png: 'image/png',
    gif: 'image/gif'
  };
  const contentType = contentTypeMap[fileExtension] || 'application/octet-stream';

  const metadata = {
    contentType: contentType,
  };

  const uploadTask = reference.put(blob, metadata);

  return new Promise((resolve, reject) => {
    uploadTask.on('state_changed', 
      null, 
      (error) => {
        console.error('Erro ao fazer upload da imagem:', error);
        reject(error);
      }, 
      async () => {
        const downloadURL = await reference.getDownloadURL();
        await firebaseFirestore
          .collection('usuarios')
          .doc(user.uid)
          .collection('documentos')
          .add({ 
            url: downloadURL, 
            fileName, 
            customName, 
            createdAt: firestore.FieldValue.serverTimestamp() 
          });

        console.log('Documento salvo no Firestore com sucesso.');
        resolve(downloadURL);
      }
    );
  });
};

export default InserirDocumentos;
