import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const ArtigoSaudeMenu3 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Como o Sono Afeta Sua Saúde</Text>

      <Text style={styles.text}>
        O sono é um componente essencial da saúde e bem-estar. Dormir adequadamente é tão importante quanto uma dieta equilibrada e exercício físico regular. No entanto, muitas pessoas subestimam a importância de um sono de qualidade, o que pode levar a diversas consequências negativas para a saúde.
      </Text>

      <Text style={styles.text}>
        Estudos mostram que a falta de sono adequado pode aumentar o risco de doenças crônicas, como doenças cardíacas, diabetes e obesidade. O sono insuficiente afeta a capacidade do corpo de regular o açúcar no sangue e aumenta a produção de hormônios do estresse, como o cortisol, que podem levar ao ganho de peso.
      </Text>

      <Text style={styles.text}>
        Além disso, o sono desempenha um papel crucial na função imunológica. Durante o sono, o sistema imunológico libera proteínas chamadas citocinas, que ajudam a combater infecções e inflamações. A privação de sono pode reduzir a produção dessas citocinas, tornando o corpo mais suscetível a doenças.
      </Text>

      <Text style={styles.text}>
        A saúde mental também está intimamente ligada ao sono. A falta de sono pode afetar o humor, levando a irritabilidade, ansiedade e depressão. Além disso, o sono adequado é necessário para o processamento e consolidação das memórias. Dormir bem ajuda a melhorar a função cognitiva, incluindo a concentração, a tomada de decisões e a resolução de problemas.
      </Text>

      <Text style={styles.text}>
        O sono também é essencial para a recuperação muscular e o desempenho físico. Durante o sono, o corpo repara tecidos musculares e sintetiza proteínas, o que é vital para os atletas e indivíduos que praticam atividades físicas intensas. A falta de sono pode levar a uma recuperação inadequada e aumentar o risco de lesões.
      </Text>

      <Text style={styles.text}>
        Além dos benefícios físicos e mentais, o sono adequado pode melhorar a aparência da pele. A privação de sono pode causar pele opaca, olheiras e aumentar os sinais de envelhecimento. Durante o sono, a pele se repara e regenera, promovendo uma aparência mais saudável e jovem.
      </Text>

      <Text style={styles.text}>
        Para melhorar a qualidade do sono, é importante manter uma rotina regular, criar um ambiente propício ao sono e evitar o uso de dispositivos eletrônicos antes de dormir. Práticas de relaxamento, como meditação e exercícios de respiração, também podem ajudar a promover um sono mais profundo e reparador.
      </Text>

      <Text style={styles.referencesTitle}>REFERÊNCIAS</Text>
      <Text style={styles.referenceText}>
        1. National Sleep Foundation. Why Do We Need Sleep? 2020.
      </Text>
      <Text style={styles.referenceText}>
        2. Centers for Disease Control and Prevention. Sleep and Chronic Disease. 2017.
      </Text>
      <Text style={styles.referenceText}>
        3. Harvard Medical School. The Importance of Sleep. 2019.
      </Text>
      <Text style={styles.referenceText}>
        4. Mayo Clinic. Sleep: The Foundation for Healthy Immune Function. 2021.
      </Text>
      <Text style={styles.referenceText}>
        5. American Psychological Association. How Sleep Affects Mental Health. 2020.
      </Text>
      <Text style={styles.referenceText}>
        6. National Institute of Neurological Disorders and Stroke. Brain Basics: Understanding Sleep. 2019.
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

export default ArtigoSaudeMenu3;
