import React from 'react';
import {
  View,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IconButton } from 'react-native-paper';
import {router } from 'expo-router';

const { width, height } = Dimensions.get("window");

export default function DicasScreen() {
  

  const dicas = [
    { name: "Sinais de Calor", route: "DicasDeCalorScreen", image: require("../../../assets/SinaisDeCalor.png") },
    { name: "Sono de Bebê", route: "SonoDeBebe", image: require("../../../assets/SonoDeBebe.png") },
    { name: "Cortar Unha", route: "CortarUnha", image: require("../../../assets/CortarUnha.png") },
    { name: "Cólica", route: "Colica", image: require("../../../assets/Colica.png") },
    { name: "Bolsa de Bebê", route: "BolsaDeBebe", image: require("../../../assets/BolsaDeBebe.png") },
    { name: "Assaduras", route: "Assaduras", image: require("../../../assets/Assaduras.png") },
  ];
  

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <IconButton
          icon="arrow-left"
          size={30}
          onPress={() => router.back()}
          iconColor="black"
          style={styles.backButton}
        />

        {dicas.map((item, index) => (
          <View key={index} style={[styles.itemView, index==0 && {marginTop:40}]}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => router.push(`${item.route}` )}
            >
              <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  keyboardView: {
    flex: 1,
    backgroundColor: "#F3D3FF",
  },
  container: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent:"center"
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  itemView: {
    width: "90%",
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  card: {
    width: "100%",
    aspectRatio: 5, 
    borderRadius: 16,
    overflow: "hidden",
    
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
