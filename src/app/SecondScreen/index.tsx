import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function SecondScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/LoginScreen');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../assets/Welcome.png')}
        style={styles.welcomeImage}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Apenas o melhor bisbilhoteiro do Brasil pode te ajudar a ficar de olho no seu pequeno.
        </Text>
      </View>

      <Image
        source={require('../../../assets/BabyImage.png')}
        style={styles.babyImage}
        resizeMode="cover"
      />
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F3D3FF',
      
  },
  welcomeImage: {
    width: '100%',
    height: height * 0.3,  
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, 
    marginVertical: height * 0.05, 
  },
  text: {
    fontSize: 18, 
    textAlign: 'center',
    color: "#BF78B8",
    fontWeight: 'bold',
  },
  babyImage: {
    width: '100%',
    height: height * 0.3,
    marginTop: 'auto', 
  },
});
