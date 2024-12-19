import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Alert } from 'react-native';
import useLotteryStore from '@/store/store';

const LotteryTicket = () => {
  const [inputNumber, setInputNumber] = useState('');
  const addSingleNumber = useLotteryStore((state) => state.addSingleNumber);

  const handleSearch = () => {
    if (inputNumber.length === 6 && !isNaN(Number(inputNumber))) {
      Alert.alert(`El número ${inputNumber} está disponible`);
    } else {
      Alert.alert('Por favor, ingresa un número válido de 6 dígitos.');
    }
  };

  const handleBuy = () => {
    if (inputNumber.length === 6 && !isNaN(Number(inputNumber))) {
      const numberToBuy = Number(inputNumber);
      addSingleNumber(numberToBuy);
      Alert.alert('Compra exitosa', `¡Has comprado el número ${numberToBuy}!`);
      setInputNumber(''); 
    } else {
      Alert.alert('Error', 'Ingresa un número válido de 6 dígitos.');
    }
  };

  return (
    <View style={styles.content}>
      <Text style={styles.scrollText}>Busca tu número de la suerte:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un número de 6 dígitos"
        keyboardType="numeric"
        maxLength={6}
        value={inputNumber}
        onChangeText={(text) => setInputNumber(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="Buscar" onPress={handleSearch} />
        <Button title="Comprar" onPress={handleBuy} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor: '#007BFF',
  },
  scrollText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default LotteryTicket;
