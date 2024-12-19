import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center',
    },
    numbersContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
    },
    numberBox: {
      backgroundColor: '#ccc',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 5,
      borderRadius: 8,
    },
    numberText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    noNumbers: {
      fontSize: 16,
      color: '#888',
    },
    ticketListContainer: {
      marginVertical: 20,
    },
    ticketListTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    ticket: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 5,
    },
    ticketDigit: {
      fontSize: 22,
      fontWeight: 'bold',
      margin: 5,
    },
    matchGreen: {
      color: 'green',  
    },
    noTickets: {
      fontSize: 16,
      color: '#888',
    },
    resultMessage: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    statsContainer: {
      marginVertical: 20,
      alignItems: 'center',
    },
    statsText: {
      fontSize: 18,
    },
    flatListContent: {
        alignItems: 'center', // Centra los elementos de la lista
        paddingHorizontal: 10,
    },
    columnWrapperStyle: {
        justifyContent: 'space-between',  // Ajusta la distribución de las columnas
    },

      
  });
 

export default styles;