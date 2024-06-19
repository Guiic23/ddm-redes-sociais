// src/components/HomeScreen.jsx
import React from 'react';
import { Image } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import styles from './styles';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/imglogo1.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/images/neurfa.png')}
        />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText  style={{top:-38,}}type="title">Fundador da Neurfa</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}></ThemedView>
      <ThemedView style={styles.step}>
        <ThemedText  style={{top:-40, left: 38,}}type="subtitle">
          Guilherme, fundador da empresa Neurfa
        </ThemedText>
        <ThemedText style={styles.text}>
          para mais detalhes sobre as redes sociais do criador da Neurfa, siga para página de redes sociais.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}
