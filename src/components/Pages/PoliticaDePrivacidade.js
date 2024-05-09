import * as React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

function PoliticaDePrivacidade() {
  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Políticas De Privacidade</Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris ut odio vehicula aliquet. 
        Phasellus sed nisl sed nisi placerat convallis at id felis. Integer bibendum magna sed purus tempor, 
        nec posuere mi ultrices. Vestibulum nec convallis est, sit amet ultricies purus. Nam interdum auctor 
        lectus, eget faucibus ligula ultrices id. Sed ultricies quam euismod turpis rutrum convallis.
      </Text>
      <Text style={styles.paragraph}>
        Fusce eget ante ullamcorper, tristique turpis a, commodo lacus. Vestibulum consequat leo id dolor 
        egestas, eget feugiat lectus mattis. Ut convallis tincidunt enim vel condimentum. Nullam nec turpis 
        id sem rhoncus ultricies. Nulla facilisi. Duis pharetra nulla nec ligula volutpat scelerisque.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris ut odio vehicula aliquet. 
        Phasellus sed nisl sed nisi placerat convallis at id felis. Integer bibendum magna sed purus tempor, 
        nec posuere mi ultrices. Vestibulum nec convallis est, sit amet ultricies purus. Nam interdum auctor 
        lectus, eget faucibus ligula ultrices id. Sed ultricies quam euismod turpis rutrum convallis.
      </Text>
      <Text style={styles.paragraph}>
        Fusce eget ante ullamcorper, tristique turpis a, commodo lacus. Vestibulum consequat leo id dolor 
        egestas, eget feugiat lectus mattis. Ut convallis tincidunt enim vel condimentum. Nullam nec turpis 
        id sem rhoncus ultricies. Nulla facilisi. Duis pharetra nulla nec ligula volutpat scelerisque.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris ut odio vehicula aliquet. 
        Phasellus sed nisl sed nisi placerat convallis at id felis. Integer bibendum magna sed purus tempor, 
        nec posuere mi ultrices. Vestibulum nec convallis est, sit amet ultricies purus. Nam interdum auctor 
        lectus, eget faucibus ligula ultrices id. Sed ultricies quam euismod turpis rutrum convallis.
      </Text>
      <Text style={styles.paragraph}>
        Fusce eget ante ullamcorper, tristique turpis a, commodo lacus. Vestibulum consequat leo id dolor 
        egestas, eget feugiat lectus mattis. Ut convallis tincidunt enim vel condimentum. Nullam nec turpis 
        id sem rhoncus ultricies. Nulla facilisi. Duis pharetra nulla nec ligula volutpat scelerisque.
      </Text>
      <Text style={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non mauris ut odio vehicula aliquet. 
        Phasellus sed nisl sed nisi placerat convallis at id felis. Integer bibendum magna sed purus tempor, 
        nec posuere mi ultrices. Vestibulum nec convallis est, sit amet ultricies purus. Nam interdum auctor 
        lectus, eget faucibus ligula ultrices id. Sed ultricies quam euismod turpis rutrum convallis.
      </Text>
      <Text style={styles.paragraph}>
        Fusce eget ante ullamcorper, tristique turpis a, commodo lacus. Vestibulum consequat leo id dolor 
        egestas, eget feugiat lectus mattis. Ut convallis tincidunt enim vel condimentum. Nullam nec turpis 
        id sem rhoncus ultricies. Nulla facilisi. Duis pharetra nulla nec ligula volutpat scelerisque.
      </Text>
      {/* Adicione mais parágrafos conforme necessário */}
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 12,
    lineHeight: 24,
  },
});

export default PoliticaDePrivacidade;
