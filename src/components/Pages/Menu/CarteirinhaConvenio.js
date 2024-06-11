import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { InserirInfoConvenio } from '../../../../config/Inserir/InserirInfoConvenio';

const CarteirinhaConvenio = ({ userId }) => {
  const [userName, setUserName] = useState('');
  const [planType, setPlanType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [validity, setValidity] = useState('');
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (userId) {
      const fetchUserInfo = async () => {
        try {
          const userDoc = await firestore().collection('usuarios').doc(userId).get();
          if (userDoc.exists) {
            const userData = userDoc.data();
            setUserName(userData.nome);
          } else {
            console.error('Documento de usuário não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar informações do usuário:', error);
        }
      };

      const fetchConvenioInfo = async () => {
        try {
          const convenioDoc = await firestore()
            .collection('usuarios')
            .doc(userId)
            .collection('carteirinhaConvenio')
            .doc('info')
            .get();

          if (convenioDoc.exists) {
            const convenioData = convenioDoc.data();
            setPlanType(convenioData.planType || '');
            setCardNumber(convenioData.cardNumber || '');
            setValidity(convenioData.validity || '');
            setShowCard(true); // Mostrar a carteirinha se os dados existirem
          } else {
            console.log('Documento de carteirinhaConvenio não encontrado');
          }
        } catch (error) {
          console.error('Erro ao buscar informações do convênio:', error);
        }
      };

      fetchUserInfo();
      fetchConvenioInfo();
    } else {
      console.error('userId não está disponível');
    }
  }, [userId]);

  const handleSave = async () => {
    try {
      await InserirInfoConvenio(userId, planType, cardNumber, validity);
      setShowCard(true);
    } catch (error) {
      console.error('Erro ao salvar informações do convênio:', error);
      Alert.alert('Erro', 'Não foi possível salvar as informações do convênio.');
    }
  };

  const handleEdit = () => {
    setShowCard(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Carteirinha de Convênio</Text>
      </View>
      {!showCard ? (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Tipo de Plano"
            value={planType}
            onChangeText={setPlanType}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Número da Carteirinha"
            value={cardNumber}
            onChangeText={setCardNumber}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Validade (MM/AA)"
            value={validity}
            onChangeText={setValidity}
            keyboardType="default"
          />
          <TouchableOpacity style={styles.uploadButton}>
            <Text style={styles.uploadButtonText}>Inserir Imagem Carteirinha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.userName}>{userName}</Text>
            <TouchableOpacity onPress={handleEdit}>
              <Text style={styles.editButtonText}>Editar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.infoText}><Text style={styles.label}>Tipo de plano: </Text>{planType}</Text>
            <Text style={styles.infoText}><Text style={styles.label}>Carteirinha Nº: </Text>{cardNumber}</Text>
            <Text style={styles.infoText}><Text style={styles.label}>Validade: </Text>{validity}</Text>
          </View>
          <View style={styles.cardButtons}>
            <TouchableOpacity style={[styles.button, styles.leftButton]}>
              <Text style={styles.buttonText}>Carteirinha digital</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.rightButton]} onPress={handleSave}>
              <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#E8F3F1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    width: '100%',
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  title: {
    fontSize: 20, // Ajustado para melhor visibilidade
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center', // Centralizar inputs
  },
  input: {
    width: '90%', // Ajustado para ocupar 90% da largura do contêiner
    height: 35,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 8,
  },
  uploadButton: {
    width: '90%', // Ajustado para ocupar 90% da largura do contêiner
    backgroundColor: '#63987C',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontSize: 14, // Ajustado para melhor visibilidade
    fontWeight: 'bold',
  },
  saveButton: {
    width: '90%', // Ajustado para ocupar 90% da largura do contêiner
    backgroundColor: '#63987C',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 14, // Ajustado para melhor visibilidade
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '100%',
    backgroundColor: '#E8F3F1',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: 24, // Aumentado o tamanho do nome completo
    fontWeight: 'bold',
    marginBottom: 10,
  },
  editButtonText: {
    color: '#63987C',
    fontSize: 16, // Ajustado para melhor visibilidade
    fontWeight: 'bold',
  },
  cardInfo: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  infoText: {
    fontSize: 16, // Ajustado para melhor visibilidade
    marginBottom: 5,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#63987C',
    borderRadius: 10,
    paddingVertical: 8,
    alignItems: 'center',
    marginHorizontal: 2.5,
  },
  leftButton: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  rightButton: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14, // Ajustado para melhor visibilidade
    fontWeight: 'bold',
  },
});

export default CarteirinhaConvenio;
