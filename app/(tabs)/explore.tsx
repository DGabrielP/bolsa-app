import {useState} from 'react';
import { useRouter } from 'expo-router'
import { View, Text, ScrollView, Button, StyleSheet, TextInput, Alert 
} from 'react-native';
import LotteryPicker from '@/components/LotteryPicker';
import LotteryTicket from '@/components/LotteryTicket';
import useLotteryStore from '@/store/store';
import styles from '@/constants/explore.styles';
import { router } from 'expo-router';
import Header from '@/components/Header';
import {CustomButton} from '@/components/ui/CustomButton'


const ExploreScreen = () => {

  const router = useRouter(); 
  const selectedNumbers = useLotteryStore((state) => state.selectedNumbers); 

  const handlePayment = () => {
    const numberOfTickets = selectedNumbers.length;
    // alert(`${numberOfTickets} boletos por pagar: ${selectedNumbers.join(', ')}`);
    
    router.push('/buy'); 
  };

  return (
    <View style={styles.container}>
      <Header title="Bienvenido!" />
      
      <View style={styles.staticContainer}>
        <LotteryPicker />
       </View>
       <View style={styles.ticketContainer}>
        <LotteryTicket />
       </View>
        <View style={styles.buttonContainer}>
          <Button title="Ir a pagar boletos" onPress={handlePayment} />
       </View>
    </View>
  );
};


export default ExploreScreen;
