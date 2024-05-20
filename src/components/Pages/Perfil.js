import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SideBar from '../Bars/SideBar';
import ProfileBar from '../Bars/ProfileBar';


const Perfil = () => {
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <View style={styles.content}>
        <ProfileBar style={styles.profileBar} />
        {/* Outros componentes aqui */}
      </View>
      <SideBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // Faz o conteúdo ocupar todo o espaço disponível
    marginTop: 250, // Adiciona margem superior para mover a ProfileBar para baixo
  },
  profileBar: {
    // Estilos adicionais da ProfileBar se necessário
  },
});

export default Perfil;
