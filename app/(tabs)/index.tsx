import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { router } from 'expo-router'; 

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';

import styles from '../../constants/index.styles';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: 'transparent', dark: 'transparent' }}
      headerImage={
        <Image
          source={require('@/assets/images/bolsa-one.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Gana con Bolsa! </ThemedText>
        
      </ThemedView>

     
      
        <View style={styles.grid}>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/explore')} 
            >
             <Text style={styles.buttonText}>Comprar boleto</Text>
             </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
             style={styles.button}
              onPress={() => router.push('/sign')} 
            >
             <Text style={styles.buttonText}>Registrarme</Text>
             </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
             style={styles.button}
              onPress={() => router.push('/results')} 
           >
              <Text style={styles.buttonText}>Resultados</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => router.push('/collect')} 
            >
             <Text style={styles.buttonText}>Cobrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      
    </ParallaxScrollView>
  );
}
