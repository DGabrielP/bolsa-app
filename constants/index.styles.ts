import { StyleSheet, Dimensions } from 'react-native';



const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  stepContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    alignItems: 'center', 
    gap: 16, 
    margin: 16,
  },


  reactLogo: {
    height: '80%',
    width: '80%',
    bottom: 0,
    left: '10%',
    position: 'absolute',
    top: '20%',
  },
   itemContainer: {
    width: '47%',
    aspectRatio: 1,
    backgroundColor: '#fff',
    margin: 3,
    borderRadius: 10,
    marginTop:10,
    alignItems: 'center',
    justifyContent: 'center',

   },
    grid: {
      flex: 1,
      flexDirection: 'row-reverse',
      flexWrap: 'wrap', // Asegura que los botones se distribuyan en varias filas
      justifyContent: 'space-between', // Distribuye los botones con espacio entre ellos
      alignItems: 'flex-start', // Centra los botones verticalmente
      marginTop: 20,
      width: '100%', // Asegúrate de que el grid ocupe suficiente ancho
    },
    button: {
      width: '90%', // Cada botón ocupará el 45% del ancho de la pantalla (2 botones por fila)
      aspectRatio: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#007AFF', // Color de fondo del botón
      margin: 0, // Espaciado entre botones
      borderRadius: 10, // Bordes redondeados
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    
  
});

export default styles;