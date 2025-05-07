import {
  View,
  Image,
  StyleSheet,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { IconButton } from "react-native-paper";
import { router } from "expo-router";

export default function MainScreen() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.keyboardView}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <IconButton
          icon="menu"
          size={30}
          onPress={() => alert("Menu aberto")}
          iconColor="black"
          style={styles.menuButton}
        />

        <Image
          source={require("../../../assets/LoginImage.png")}
          style={styles.image}
        />

        <View style={styles.containerCards}>
          <TouchableOpacity style={styles.card} onPress={() => router.push("DicasScreen")}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/Dicas.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert("Registros")}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/Registros.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => alert("Câmera")}>
            <Image
              style={styles.cardImage}
              source={require("../../../assets/Camera.png")}
            />
          </TouchableOpacity>
        </View>
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
  },
  menuButton: {
    position: "absolute",
    top: 20,
    left: 20,
    zIndex: 10,
  },
  image: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  containerCards: {
    height:"50%",
    width: "90%",
    alignItems: "center",
  },
  card: {
    height:"40%",
    width: "100%",
    aspectRatio: 3, 
    marginBottom: 20,
  },
  cardImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
