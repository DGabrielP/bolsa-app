import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Header from '@/components/Header';  
import useBoughtStore from '@/store/boughtStore';  
import styles from '@/constants/results.styles';

const ResultsScreen = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const { boughtNumbers } = useBoughtStore(state => state);

  const generateWinningNumbers = () => {
    return Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));
  };

  const matchNumbers = (ticket: number) => {
    const ticketStr = ticket.toString();
    const winningStr = winningNumbers.join("");
    let matchCount = 0;

    for (let i = 0; i < ticketStr.length; i++) {
      if (ticketStr[i] === winningStr[i]) matchCount++;
    }

    return matchCount;
  };

  const handlePlay = () => {
    setIsButtonDisabled(true);
    const numbers = generateWinningNumbers();
    setWinningNumbers(numbers);

  };

  let fiveMatches = 0;
  let fourMatches = 0;
  let threeMatches = 0;

  boughtNumbers.forEach(ticket => {
    const matchCount = matchNumbers(ticket);
    if (matchCount === 5) fiveMatches++;
    if (matchCount === 4) fourMatches++;
    if (matchCount === 3) threeMatches++;
  });

  const resultMessage =
    boughtNumbers.length === 0
      ? "No tienes boletos para este juego."
      : fiveMatches > 0
      ? "¡Ganaste!"
      : "Suerte para la próxima";

  return (
    <View style={styles.container}>
      <Header title="Resultados" />
      <Text style={styles.title}>Números ganadores</Text>

      <View style={styles.numbersContainer}>
        {winningNumbers.length > 0 ? (
          winningNumbers.map((number, index) => (
            <View key={index} style={styles.numberBox}>
              <Text style={styles.numberText}>{number}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.noNumbers}>Aún no se han generado los números ganadores.</Text>
        )}
      </View>

      <Button title="Jugar" onPress={handlePlay} disabled={isButtonDisabled} />

      <View style={styles.ticketListContainer}>
        <Text style={styles.ticketListTitle}>Tus boletos</Text>
        {boughtNumbers.length > 0 ? (
          boughtNumbers.map((ticket, index) => (
            <View key={index} style={styles.ticket}>
              {ticket.toString().split("").map((digit, digitIdx) => (
                <Text key={digitIdx} style={styles.ticketDigit}>
                  {digit}
                </Text>
              ))}
            </View>
          ))
        ) : (
          <Text style={styles.noTickets}>No tienes boletos guardados.</Text>
        )}
      </View>

      <Text style={styles.resultMessage}>{resultMessage}</Text>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>5 aciertos: {fiveMatches}</Text>
        <Text style={styles.statsText}>4 aciertos: {fourMatches}</Text>
        <Text style={styles.statsText}>3 aciertos: {threeMatches}</Text>
      </View>

      <Button title="Cobrar" onPress={() => Alert.alert("Próximamente")} />
    </View>
  );
};

export default ResultsScreen;
