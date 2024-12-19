import { View, Text, Button, StyleSheet, Alert, ScrollView, FlatList } from 'react-native';
import Header from '@/components/Header';
import useLotteryStore from '@/store/store';
import useBoughtStore from '@/store/boughtStore';
import styles from '@/constants/buy.styles';
import { router } from 'expo-router';


const BuyScreen = () => {
  const lotteryNumbers = useLotteryStore(state => state.selectedNumbers);
  const setBoughtNumbers = useBoughtStore(state => state.setBoughtNumbers);

  const handlePayment = () => {
    if (lotteryNumbers.length === 0) {
      Alert.alert('Error', 'No tienes boletos por pagar');
      return;
    }
    setBoughtNumbers(lotteryNumbers);
    Alert.alert('Éxito', '¡Has realizado el pago con éxito!');
    router.push('/');
  };

  const totalNumbers = lotteryNumbers.length;
  const totalCost = totalNumbers * 1.5;

  return (
    <View style={styles.container}>
      <Header title="Ventanilla de Pago" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.numbersContainer}>
          <Text style={styles.numbersTitle}>Boletos guardados:</Text>
          {lotteryNumbers.length > 0 ? (
            <FlatList
              data={lotteryNumbers}
              keyExtractor={(item, index) => index.toString()}
              numColumns={3}
              columnWrapperStyle={styles.columnWrapper}
              renderItem={({ item }) => (
                <View style={styles.numberBox}>
                  <Text style={styles.numberItem}>{item}</Text>
                </View>
              )}
            />
          ) : (
            <Text style={styles.noNumbers}>No tienes Boletos guardados.</Text>
          )}
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.totalText}>Comprar {totalNumbers} Boletos(s)</Text>
          <Text style={styles.totalCost}>${totalCost.toFixed(2)} dólares</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button title="Pagar" onPress={handlePayment} />
      </View>
    </View>
  );
};

export default BuyScreen;
