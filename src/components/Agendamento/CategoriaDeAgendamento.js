import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet} from 'react-native'

const CategoriaDeAgendamento = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };


    return(
        <View style={styles.container}>
            <TouchableOpacity
            style={[styles.button, selectedCategory === 'Por Vir' && styles.selectedButton]}
            onPress={() => handleCategoryPress('Por Vir')}
            >
            <Text style={styles.buttonText}>Por Vir</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, selectedCategory === 'Feito' && styles.selectedButton]}
            onPress={() => handleCategoryPress('Feito')}
            >
            <Text style={styles.buttonText}>Feito</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, selectedCategory === 'Cancelado' && styles.selectedButton]}
            onPress={() => handleCategoryPress('Cancelado')}
            >
            <Text style={styles.buttonText}>Cancelado</Text>
            </TouchableOpacity>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderWidth: 1, // Adiciona uma borda ao redor de todo o conjunto de botões
      borderRadius: 10, // Borda arredondada para criar a ilusão de um retângulo único
      borderColor: 'black', // Cor da borda
      overflow: 'hidden', // Remove qualquer overflow dos elementos filhos
    },
    button: {
      flex: 1, // Ocupa todo o espaço disponível
      paddingVertical: 10,
      paddingHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedButton: {
      backgroundColor: 'blue', // Cor de fundo quando o botão está selecionado
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });


export default CategoriaDeAgendamento;