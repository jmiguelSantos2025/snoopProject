import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DicasDeCalorScreen() {
  return (
    <View style={styles.outerContainer}>
      <ImageBackground
        source={require('../../../assets/CalorDeBebeScreen.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* <View style={styles.iconContainer}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => console.log('Ir para a esquerda')}
          >
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => console.log('Ir para a direita')}
          >
            <Ionicons name="arrow-forward" size={30} color="#fff" />
          </TouchableOpacity>
        </View> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 20, 
  },
  iconButton: {
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 15,
    borderRadius: 50, 
  },
});