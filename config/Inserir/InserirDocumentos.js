import { firebaseStorage, firebaseFirestore, firebaseAuth } from '../firebaseConfig';
import firestore from '@react-native-firebase/firestore';

const InserirDocumentos = async (uri, fileName, customName) => {
  const user = firebaseAuth.currentUser;
  if (!user) {
    console.error('Usuário não autenticado.');
    throw new Error('Usuário não autenticado.');
  }

  console.log('Iniciando referência do Firebase Storage...');
  const reference = firebaseStorage.ref(`documents/${user.uid}/${fileName}`);

  try {
    console.log('Buscando arquivo da URI...');
    const response = await fetch(uri);
    const blob = await response.blob();
    console.log('Arquivo convertido para Blob.');

    const metadata = {
      contentType: 'image/jpeg',
    };

    console.log('Iniciando upload do arquivo...');
    const uploadTask = reference.put(blob, metadata);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload está ' + progress + '% concluído');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload pausado');
            break;
          case 'running':
            console.log('Upload em execução');
            break;
        }
      }, 
      (error) => {
        console.error('Erro ao fazer upload da imagem:', error);
        throw error;
      }, 
      async () => {
        const downloadURL = await reference.getDownloadURL();
        console.log('Arquivo disponível em', downloadURL);

        console.log('Salvando URL no Firestore...');
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
      }
    );
  } catch (error) {
    console.error('Erro ao processar o upload:', error);
    throw error;
  }
};

export default InserirDocumentos;
