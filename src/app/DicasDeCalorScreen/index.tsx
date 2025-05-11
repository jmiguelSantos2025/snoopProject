import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
const {width, height} = Dimensions.get("window");

export default function DicasDeCalorScreen() {
  return (
    <View style={styles.container}>
        {/* Header com 10% da altura */}
        <View style={styles.header}>
            <ImageBackground 
                source={require('../../../assets/HeaderCalorBebe.png')}
                style={styles.headerImage}
                resizeMode="cover"
            />
        </View>
        
        {/* SecondPierce com o restante da altura */}
        <View style={styles.secondPierce}>
            {/* Imagem que ocupa toda a área */}
            <Image 
                source={require('../../../assets/CalorBebeImage.png')}
                style={styles.mainImage}
                resizeMode="cover"
            />
            
            {/* Ícone à esquerda (sobreposto) */}
            <TouchableOpacity style={styles.leftIcon}>
                <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
            
            {/* Ícone à direita (sobreposto) */}
            <TouchableOpacity style={styles.rightIcon}>
                <Ionicons name="arrow-forward" size={32} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: '10%',
        width: '100%',
        overflow: 'hidden',
    },
    headerImage: {
        width: '100%',
        height: '100%',
    },
    secondPierce: {
        height: '90%',
        width: '100%',
        position: 'relative', // Importante para posicionar os ícones absolutamente dentro
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    leftIcon: {
        position: 'absolute',
        left: 20,
        top: '50%',
        marginTop: -16, // Metade do tamanho do ícone para centralizar verticalmente
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    rightIcon: {
        position: 'absolute',
        right: 20,
        top: '50%',
        marginTop: -16, // Metade do tamanho do ícone para centralizar verticalmente
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
});