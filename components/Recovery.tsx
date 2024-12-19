import React, { useState } from 'react';
import { FlatList, View, Text, Switch, Button, StyleSheet } from 'react-native';
import useLotteryStore from '@/store/store';

const generateRandomNumbers = () => {
  return Array.from({ length: 20 }, () =>
    Math.floor(1000000000 + Math.random() * 9000000000) // Números de 10 cifras
  );
};

const LotteryPicker = () => {
  const [numbers, setNumbers] = useState(generateRandomNumbers());
  const [switchStates, setSwitchStates] = useState<{ [key: number]: boolean }>({});
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const toggleSwitch = (number: number) => {
    setSwitchStates((prevState) => ({
      ...prevState,
      [number]: !prevState[number],
    }));
  };

  const shuffleNumbers = () => {
    setNumbers(generateRandomNumbers());
    setSwitchStates({}); // aquí se reinicia los estados de los switches
  };

  const handlePurchase = () => {
    const selected = numbers.filter((number) => switchStates[number]);
    setSelectedNumbers(selected);
    alert(`Has comprado los números: ${selected.join(', ')}`); //solo prueba, borrar liunea luego
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
              onValueChange={() => toggleSwitch(item)}
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
