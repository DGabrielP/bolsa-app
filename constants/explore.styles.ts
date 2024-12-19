import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'transparent',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  staticContainer: {
    flex: 6,
    padding: 0,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    zIndex: 1, // Mantiene el contenedor estático sobre el contenido desplazable
  },
  ticketContainer: {
    flex: 4,  
    padding: 10, 
    backgroundColor: 'transparent'
  },
  buttonContainer: {
    
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: 'tranparent',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  
});
  


  export default styles;