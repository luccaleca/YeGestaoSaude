import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ArtigoSaudeMenu4 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>A Importância da Hidratação</Text>

      <Text style={styles.text}>
        A hidratação é essencial para a saúde e o funcionamento adequado do corpo humano. A água é um componente vital para quase todas as funções corporais, incluindo a digestão, absorção de nutrientes, circulação e regulação da temperatura corporal. Manter-se hidratado é fundamental para garantir que esses processos ocorram de maneira eficiente.
      </Text>

      <Text style={styles.text}>
        O corpo humano é composto por cerca de 60% de água, o que destaca sua importância. A hidratação adequada ajuda a manter o equilíbrio de fluidos no corpo, que é crucial para o transporte de nutrientes para as células e a remoção de resíduos. A desidratação, mesmo que leve, pode afetar negativamente a função cognitiva, o humor e a energia.
      </Text>

      <Text style={styles.text}>
        Além disso, a hidratação é essencial para a saúde da pele. A água ajuda a manter a elasticidade e a aparência jovem da pele, prevenindo a secura e a formação de rugas. Beber água suficiente pode ajudar a melhorar a textura da pele e proporcionar um brilho saudável.
      </Text>

      <Text style={styles.text}>
        A hidratação adequada também desempenha um papel importante no desempenho físico. Durante o exercício, o corpo perde água através do suor, o que pode levar à desidratação se não for reposta. A desidratação pode causar fadiga, diminuir a coordenação e aumentar o risco de cãibras musculares. Portanto, é crucial beber água antes, durante e após a atividade física para manter o desempenho e a recuperação.
      </Text>

      <Text style={styles.text}>
        Para a função digestiva, a água é igualmente importante. Ela ajuda na digestão dos alimentos e na absorção de nutrientes, além de prevenir a constipação ao manter as fezes macias e facilitando a sua passagem pelo trato digestivo. A ingestão adequada de água é essencial para um sistema digestivo saudável.
      </Text>

      <Text style={styles.text}>
        A regulação da temperatura corporal é outra função vital da hidratação. Durante o calor ou o exercício intenso, o corpo perde água através do suor, que ajuda a resfriar a temperatura corporal. Sem hidratação adequada, o risco de hipertermia e exaustão pelo calor aumenta significativamente.
      </Text>

      <Text style={styles.text}>
        Para garantir uma hidratação adequada, é recomendado beber pelo menos oito copos de água por dia, embora as necessidades possam variar de acordo com a idade, sexo, nível de atividade física e clima. Além da água, outras fontes de líquidos, como sucos naturais, chás e alimentos ricos em água, como frutas e vegetais, também contribuem para a hidratação.
      </Text>

      <Text style={styles.referencesTitle}>REFERÊNCIAS</Text>
      <Text style={styles.referenceText}>
        1. National Academies of Sciences, Engineering, and Medicine. Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate. 2005.
      </Text>
      <Text style={styles.referenceText}>
        2. Mayo Clinic. Water: How much should you drink every day? 2021.
      </Text>
      <Text style={styles.referenceText}>
        3. Centers for Disease Control and Prevention. Get the Facts: Drinking Water and Intake. 2020.
      </Text>
      <Text style={styles.referenceText}>
        4. Harvard T.H. Chan School of Public Health. The Nutrition Source: Water. 2018.
      </Text>
      <Text style={styles.referenceText}>
        5. American Heart Association. Staying Hydrated - Staying Healthy. 2020.
      </Text>
      <Text style={styles.referenceText}>
        6. World Health Organization. Nutrition: Hydration. 2019.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
  },
  referencesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  referenceText: {
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 5,
  },
});

export default ArtigoSaudeMenu4;
