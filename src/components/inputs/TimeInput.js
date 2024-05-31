import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const TimeInput = ({ value, onChange }) => {

  const showTimePicker = () => {
    DateTimePickerAndroid.open({
      value: value || new Date(),
      onChange: (event, selectedTime) => {
        if (selectedTime) {
          onChange(selectedTime);
        }
      },
      mode: 'time',
      display: 'default',
    });
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Selecione o horário:</Text>
      <TouchableOpacity onPress={showTimePicker} style={styles.input}>
        <Text>{formatTime(value)}</Text>
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

export default TimeInput;
