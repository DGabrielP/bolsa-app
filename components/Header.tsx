// Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type HeaderProps = {
  title: string; 
};

const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: '#007BFF', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});

export default Header;
