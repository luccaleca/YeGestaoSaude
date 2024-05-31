import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const DateInput = ({ value, onChange }) => {

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: value || new Date(),
      onChange: (event, selectedDate) => {
        if (selectedDate) {
          onChange(selectedDate);
        }
      },
      mode: 'date',
      display: 'default',
    });
  };

  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione a data:</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.input}>
        <Text>{formatDate(value)}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
});

export default DateInput;
