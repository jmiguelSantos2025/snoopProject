import { View, Image, StyleSheet, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from "react-native";
import { IconButton } from "react-native-paper"; 
import { useState } from "react";
import { router } from "expo-router";

export default function MainScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <IconButton
        icon="menu"
        size={30}
        onPress={() => alert("Menu aberto")}
        iconColor="black"
        style={styles.menuButton}
      />

      <Image source={require("../../../assets/LoginImage.png")} style={styles.image} />

      <Text style={styles.title}>Bem-vindo</Text>

      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>Câmera</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Registros</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Dicas</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#F3D3FF",
    paddingHorizontal: "5%",
    paddingTop: "10%",
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  image: {
    height: "40%",
    width: "50%",
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A1B9A",
    marginBottom: 20,
  },
  cardsContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  card: {
    width: "80%",
    height: 100,
    backgroundColor: "#BF78B8",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    borderRadius: 10,
  },
  cardText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
