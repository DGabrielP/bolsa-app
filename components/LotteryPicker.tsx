import React, { useState } from 'react';
import { FlatList, View, Text, Switch, Button, StyleSheet } from 'react-native';
import useLotteryStore from '@/store/store';

const generateRandomNumbers = () => {
  return Array.from({ length: 20 }, () =>
    Math.floor(100000 + Math.random() * 900000) // Números de 6 cifras
  );
};

const LotteryPicker = () => {
  const [numbers, setNumbers] = useState(generateRandomNumbers());

  // Traer acciones y estados desde Zustand
  const { switchStates, selectedNumbers, toggleSwitch, purchaseNumbers, resetSwitches } = useLotteryStore();

  const shuffleNumbers = () => {
    setNumbers(generateRandomNumbers()); 
    resetSwitches(); 
  };

  const handlePurchase = () => {
    purchaseNumbers(numbers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listText}>Escoje tus boletos:</Text>
      <FlatList
        data={numbers}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => (
          <View style={styles.numberRow}>
            <Switch
              value={!!switchStates[item]}
              onValueChange={() => toggleSwitch(item)} // Alternar estado en Zustand
            />
            <Text style={styles.numberText}>{item}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonContainer}>
        <Button title="Revolver" onPress={shuffleNumbers} />
        <Button title="Comprar" onPress={handlePurchase} />
      </View>
      <View style={styles.selectedNumbersContainer}>
        <Text style={styles.selectedNumbersText}>
          Números comprados: {selectedNumbers.length > 0 ? selectedNumbers.join(', ') : 'Ninguno'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  listContainer: {
    paddingVertical: 20,
  },
  listText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    color: '#fff',
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  numberText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderTopColor: '#ddd',
  },
  selectedNumbersContainer: {
    width: '100%',
    padding: 5,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderTopColor: '#ddd',
  },
  selectedNumbersText: {
    fontSize: 16,
    color: '#333',
  },
});

export default LotteryPicker;
