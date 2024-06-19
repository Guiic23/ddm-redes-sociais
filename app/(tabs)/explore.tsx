import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import ParallaxScrollView from '../../components/ParallaxScrollView';
import { ThemedView } from '../../components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const TabTwoScreen = () => {
  const lin = () => {
    Linking.openURL('https://www.linkedin.com/in/guilherme-rodrigues-santos-58bab6261/');
  }; 
  const YouPress = () => {
    Linking.openURL('https://github.com/Guiic23/');
  }; 
  const IntaPress = () => {
    Linking.openURL('https://www.instagram.com/guilhermeicex/');
  }; 
  const FecePress = () => {
    Linking.openURL('https://www.facebook.com/');
  }; 
  const tikPress = () => {
    Linking.openURL('https://www.tiktok.com/');
  }; 
  const whaPress = () => {
    Linking.openURL('https://wa.link/wa4n4y');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#353636' }}
      headerImage={
        <ThemedView>
          <Ionicons style={styles.headerImage} name="planet" size={20} color="black" />
          <Image style={styles.header} source={require('../../assets/images/mrs.png')} />
        </ThemedView>
      }
    >
      <ThemedView style={styles.viewlogo}>
        <Image style={styles.imagelogo} source={require('../../assets/images/pi.png')} />
      </ThemedView> 
      <ThemedView style={styles.titleContainer}>
        <TouchableOpacity style={styles.button} onPress={lin}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg.png')} />
          <ThemedText style={styles.textbutton}>LinkedIn</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={YouPress}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg (1).png')} />
          <ThemedText style={styles.textbutton}>Gitub</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={IntaPress}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg (2).png')} />
          <ThemedText style={styles.textbutton}>Instagram</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={FecePress}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg (3).png')} />
          <ThemedText style={styles.textbutton}>Facebook</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={tikPress}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg (4).png')} />
          <ThemedText style={styles.textbutton}>TikTok</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={whaPress}>
          <Image style={styles.imageStyle} source={require('../../assets/images/pngegg (5).png')} />
          <ThemedText style={styles.textbutton}>WhatsApp</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    top: 6,
    left: 130,
    position: 'absolute',
  },
  viewlogo: {
    alignItems: 'center',
  },
  imagelogo: {
    width: 170,
    height: 170,
    borderRadius: 85,
    borderWidth: 2,
    borderColor: 'black',
  },
  header:{
    
  },
  imageStyle: {
    height: 50,
    width: 50,
    top: 9,
    left: 9,
  },
  textbutton: {
    fontSize: 22,
    left: 85,
    top: -18,
    fontFamily: 'serif',
  },
  button: {
    width: 380,
    borderRadius: 30,
    top: 30,
    height: 60,
    backgroundColor: 'white',
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#DDD',
    left: 13,
    justifyContent: 'space-around',
  },
  header: {
    height: 250,
    width: 450,
    top: 35,
    position: 'absolute',
  },
  titleContainer: {
    height: 700,
    width: 420,
    left: -15,
    gap: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
  },
});

export default TabTwoScreen;
