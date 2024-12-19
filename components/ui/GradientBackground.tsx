import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { View, StyleSheet } from 'react-native';

export const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <LinearGradient
      colors={['rgb(0, 0, 255)', 'rgb(255, 255, 255)']} // Gradiente azul a blanco
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
