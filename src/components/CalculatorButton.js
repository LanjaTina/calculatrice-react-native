import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function CalculatorButton({ onPress, value }) {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  buttonText: {
    color: '#222',
    fontSize: 30,
  },
});
