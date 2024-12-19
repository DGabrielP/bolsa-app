import { TouchableOpacity, Text, StyleSheet, ViewStyle, TextStyle, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;

type CustomButtonProps = {
    onPress: () => void;
    title: string;
    style?: ViewStyle; // Para personalizar el contenedor del botón
    textStyle?: TextStyle; // Para personalizar el texto del botón
  };
  
  export const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, style, textStyle }) => {
    return (
      <TouchableOpacity
        style={[styles.button, style]} // Combina estilos predeterminados con los personalizados
        onPress={onPress}>
        <Text style={[styles.text, textStyle]}>{title}</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
        width: (screenWidth - 64) / 2, // 2 botones por fila, con márgenes
        height: (screenWidth - 64) / 2, // Cuadrado
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4c669f', // Color del botón
        borderRadius: 8,
      },
      text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
      },
  });
