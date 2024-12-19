import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      
      backgroundColor: 'transparent',
    },
    scrollContainer: {
      paddingBottom: 20,
    },
    numbersContainer: {
      marginBottom: 20,
    },
    numbersTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    numberItem: {
      fontSize: 16,
      padding: 5,
    },
    noNumbers: {
      fontSize: 16,
      color: 'gray',
    },
    priceContainer: {
      marginBottom: 20,
    },
    totalText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    totalCost: {
      fontSize: 30,
      color: '#d40e0e',
    },
    buttonContainer: {
      marginTop: 20,
    },
    columnWrapper: {
      justifyContent: 'space-between', // Espacio entre columnas
    },
    numberBox: {
      flex: 1,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#e6e6e6',
      padding: 10,
      borderRadius: 8,
    },
  });

  export default styles;
