import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CalculatorButton from './CalculatorButton';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.input}>{input}</Text>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="7" />
        <CalculatorButton onPress={handleButtonPress} value="8" />
        <CalculatorButton onPress={handleButtonPress} value="9" />
        {/* Ajoutez les autres boutons ici */}
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="4" />
        <CalculatorButton onPress={handleButtonPress} value="5" />
        <CalculatorButton onPress={handleButtonPress} value="6" />
        {/* Ajoutez les autres boutons ici */}
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="1" />
        <CalculatorButton onPress={handleButtonPress} value="2" />
        <CalculatorButton onPress={handleButtonPress} value="3" />
        {/* Ajoutez les autres boutons ici */}
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="0" />
        <CalculatorButton onPress={handleButtonPress} value="+" />
        <CalculatorButton onPress={handleButtonPress} value="-" />
        {/* Ajoutez les autres boutons ici */}
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
        <Text style={styles.clearButtonText}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.calculateButton} onPress={calculateResult}>
        <Text style={styles.calculateButtonText}>=</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  calculateButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 20,
  },
});
