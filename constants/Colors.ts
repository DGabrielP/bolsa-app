/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

//aqui aplico el background general
import { LinearGradient } from 'expo-linear-gradient';


const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    backgroundStart: 'rgb(0, 0, 255)', // Azul eléctrico
    backgroundEnd: 'rgb(255, 255, 255)', // Blanco
    tint: '#2f95dc',
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: '#2f95dc',
  },
  dark: {
    text: '#ffffff',
    backgroundStart: 'rgb(0, 0, 255)',
    backgroundEnd: 'rgb(255, 255, 255)',
    tint: '#fff',
    icon: '#ccc',
    tabIconDefault: '#ccc',
    tabIconSelected: '#fff',
  },
};
