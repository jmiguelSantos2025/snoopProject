import React from 'react';
import { View, ImageBackground, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
const {width, height} = Dimensions.get("window");

export default function SonoDeBebe() {
  return (
    <View style={styles.container}>
    
        <View style={styles.header}>
            <ImageBackground 
                source={require('../../../assets/HeaderSonoDeBebe.png')}
                style={styles.headerImage}
                resizeMode="cover"
            />
        </View>
        
       
        <View style={styles.secondPierce}>
           
            <Image 
                source={require('../../../assets/SonoDeBebeImage.png')}
                style={styles.mainImage}
                resizeMode="contain"
            />
            
            
            <TouchableOpacity style={styles.leftIcon} onPress={()=>router.push("DicasDeCalorScreen")}>
                <Ionicons name="arrow-back" size={32} color="white" />
            </TouchableOpacity>
            
            
            <TouchableOpacity style={styles.rightIcon} onPress={()=>router.push("CortarUnha")}>
                <Ionicons name="arrow-forward" size={32} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#F4D6EC"
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
        position: 'relative', 
        
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    leftIcon: {
        position: 'absolute',
        left: 10,
        top: '50%',
        marginTop: -16, 
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
    rightIcon: {
        position: 'absolute',
        right: 10,
        top: '50%',
        marginTop: -16, 
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        padding: 8,
    },
});