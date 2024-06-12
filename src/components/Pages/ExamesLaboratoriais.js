import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const ExamesLaboratoriais = () => {
  const referenceRanges = [
    {
      test: "1,25-Dihidroxivitamina D (1,25-dihidroxicolecalciferol), soro",
      range: "Consulte Metabólitos da Vitamina D"
    },
    {
      test: "1,5-Anidroglucitol, soro ou plasma",
      range: "Feminino: 6,8–29,3 µg/mL; Masculino: 10,7–32 µg/mL"
    },
    {
      test: "17-Hidroxicorticosteroides (Porter-Silber), urina",
      range: "Feminino: 2–8 mg/24 hr; Masculino: 3–10 mg/24 hr"
    },
    {
      test: "17-Hidroxiprogesterona, soro",
      range: "Feminino, folicular: ?80 ng/dL; Feminino, lútea: ?285 ng/dL; Feminino, pós-menopausa: ?51 ng/dL; Masculino (adulto): ?220 ng/dL"
    },
    {
      test: "5-Hidroxindolacético, urina",
      range: "2–9 mg/24 hr"
    },
    {
      test: "5'-Nucleotidase, soro",
      range: "0,3–2,6 (Bodansky) unidades/dL (0–15 U/L)"
    },
    {
      test: "6-Tioguanina, sangue total",
      range: "230–400 pmol/8x10^8 RBCs"
    },
    {
      test: "Contagem absoluta de neutrófilos (ANC)",
      range: "2000–8250/?L"
    },
    {
      test: "Fosfatase ácida, soro",
      range: "0,5–2,0 (Bodansky) unidades/mL"
    },
    {
      test: "ACTH, plasma",
      range: "10–60 pg/mL"
    },
    {
      test: "Tempo de tromboplastina parcial ativada",
      range: "25–35 segundos"
    },
    {
      test: "Albumina, soro",
      range: "3,5–5,5 g/dL"
    },
    {
      test: "Aldosterona, plasma",
      range: "Supino ou sentado: ?10 ng/dL; Em pé: ?21 ng/dL; Dieta baixa em sódio (supino): ?30 ng/dL"
    },
    {
      test: "Fosfatase alcalina, soro",
      range: "30–120 U/L"
    },
    {
      test: "Alpha1-antitripsina (AAT), soro",
      range: "150–350 mg/dL"
    },
    {
      test: "Alfafetoproteína, soro",
      range: "?10 ng/mL"
    },
    {
      test: "Aminotransferase, soro alanina (ALT, SGPT)",
      range: "10–40 U/L"
    },
    {
      test: "Aminotransferase, soro aspartato (AST, SGOT)",
      range: "10–40 U/L"
    },
    {
      test: "Amônia, plasma",
      range: "40–70 µg/dL"
    },
    {
      test: "Amilase, soro",
      range: "25–125 U/L (80–180 [Somogyi] unidades/dL)"
    },
    {
      test: "Androstenediona, soro",
      range: "Feminino: 30–200 ng/dL; Masculino: 40–150 ng/dL"
    },
    {
      test: "Angiotensina conversora de enzima, soro",
      range: "8–53 U/L"
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Intervalos de Referência de Exames Laboratoriais</Text>
      {referenceRanges.map((item, index) => (
        <View key={index} style={styles.itemContainer}>
          <Text style={styles.testName}>{item.test}</Text>
          <Text style={styles.testRange}>{item.range}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  testName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  testRange: {
    fontSize: 14,
    color: '#555',
  },
});

export default ExamesLaboratoriais;
