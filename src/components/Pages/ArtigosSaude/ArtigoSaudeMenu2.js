import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ArtigoSaudeMenu2 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Os Benefícios da Alimentação Saudável</Text>

      <Text style={styles.text}>
        Uma alimentação saudável é fundamental para a manutenção da saúde e bem-estar. Consumir uma variedade de alimentos ricos em nutrientes pode ajudar a prevenir doenças crônicas, promover a longevidade e melhorar a qualidade de vida. Dietas equilibradas fornecem ao corpo as vitaminas, minerais e outros nutrientes necessários para o funcionamento ótimo.
      </Text>

      <Text style={styles.text}>
        Estudos demonstram que uma dieta rica em frutas, vegetais, grãos integrais e proteínas magras pode reduzir o risco de doenças cardiovasculares, diabetes tipo 2 e certos tipos de câncer. Esses alimentos são ricos em fibras, antioxidantes e fitonutrientes, que desempenham papéis essenciais na proteção do corpo contra inflamações e danos celulares.
      </Text>

      <Text style={styles.text}>
        A saúde digestiva também se beneficia de uma alimentação equilibrada. Alimentos ricos em fibras, como frutas, vegetais e grãos integrais, ajudam a promover um sistema digestivo saudável e prevenir problemas como constipação e diverticulite. Além disso, uma dieta adequada pode melhorar a microbiota intestinal, o que está associado a uma melhor imunidade e saúde mental.
      </Text>

      <Text style={styles.text}>
        Além dos benefícios físicos, a alimentação saudável também pode impactar positivamente a saúde mental. Nutrientes como ômega-3, encontrados em peixes gordurosos, nozes e sementes, são conhecidos por seus efeitos benéficos na função cerebral e no humor. Dietas equilibradas também podem ajudar a reduzir os sintomas de depressão e ansiedade.
      </Text>

      <Text style={styles.text}>
        Manter um peso saudável é outro benefício importante de uma alimentação equilibrada. O consumo de alimentos ricos em nutrientes e baixos em calorias vazias pode ajudar a controlar o peso corporal, reduzindo o risco de obesidade e suas complicações associadas, como doenças cardíacas e diabetes.
      </Text>

      <Text style={styles.text}>
        A hidratação adequada também faz parte de uma alimentação saudável. Beber água suficiente é crucial para manter todas as funções corporais, incluindo a regulação da temperatura, a digestão e a eliminação de toxinas. Além disso, a hidratação adequada pode melhorar a pele e a função cognitiva.
      </Text>

      <Text style={styles.referencesTitle}>REFERÊNCIAS</Text>
      <Text style={styles.referenceText}>
        1. World Health Organization. Healthy diet. 2020.
      </Text>
      <Text style={styles.referenceText}>
        2. Harvard T.H. Chan School of Public Health. The Nutrition Source: Healthy Eating Plate. 2018.
      </Text>
      <Text style={styles.referenceText}>
        3. American Heart Association. The benefits of eating healthy foods. 2021.
      </Text>
      <Text style={styles.referenceText}>
        4. National Institute of Diabetes and Digestive and Kidney Diseases. Benefits of Eating Healthy. 2019.
      </Text>
      <Text style={styles.referenceText}>
        5. Mayo Clinic. Nutrition and healthy eating. 2021.
      </Text>
      <Text style={styles.referenceText}>
        6. Centers for Disease Control and Prevention. Nutrition: Why It Matters. 2020.
      </Text>

      <Text style={styles.text}>
        Adotar hábitos alimentares saudáveis é uma escolha inteligente para melhorar a saúde e a qualidade de vida. Incorporar uma variedade de alimentos nutritivos na dieta diária pode trazer inúmeros benefícios, desde a prevenção de doenças até o aumento da longevidade e bem-estar geral.
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

export default ArtigoSaudeMenu2;
