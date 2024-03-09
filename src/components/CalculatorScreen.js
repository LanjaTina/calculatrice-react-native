import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CalculatorButton from './CalculatorButton';

export default function CalculatorScreen() {
  const [input, setInput] = useState('');

  const handleButtonPress = (value) => {
    if (value === '×') {
      setInput(input + '*');
    } else if (value === '/') {
      setInput(input + '/');
    } else {
      setInput(input + value);
    }
  };

  const clearInput = () => {
    setInput('');
  };

  const calculateResult = () => {
    try {
      setInput(eval(input.replace(/×/g, '*').replace(/÷/g, '/')).toString());
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
        <CalculatorButton onPress={handleButtonPress} value="+" />
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="4" />
        <CalculatorButton onPress={handleButtonPress} value="5" />
        <CalculatorButton onPress={handleButtonPress} value="6" />
        <CalculatorButton onPress={handleButtonPress} value="-" />
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="1" />
        <CalculatorButton onPress={handleButtonPress} value="2" />
        <CalculatorButton onPress={handleButtonPress} value="3" />
        <CalculatorButton onPress={handleButtonPress} value="×" />
      </View>
      <View style={styles.buttons}>
        <CalculatorButton onPress={handleButtonPress} value="0" />
        <CalculatorButton onPress={handleButtonPress} value="." />
        <TouchableOpacity style={styles.calculateButton} onPress={calculateResult}>
          <Text style={styles.calculateButtonText}>=</Text>
        </TouchableOpacity>
        <CalculatorButton onPress={handleButtonPress} value="÷" />
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={clearInput}>
        <Text style={styles.clearButtonText}>C</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20, // Ajuster l'espace sur les côtés
  },
  input: {
    fontSize: 40,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -5, // Supprimer la marge entre les boutons
  },
  clearButton: {
    backgroundColor: '#FF3B30',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  calculateButton: {
    backgroundColor: '#4CD964',
    padding: 20,
    margin: 5,
    borderRadius: 50,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 20,
  },
  calculateButtonText: {
    color: 'white',
    fontSize: 30,
  },
});
