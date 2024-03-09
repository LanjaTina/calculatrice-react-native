import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorScreen from './CalculatorScreen';

export default function CalculatorApp() {
  return (
    <View style={styles.container}>
      <CalculatorScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
