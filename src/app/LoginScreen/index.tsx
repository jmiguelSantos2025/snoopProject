import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  // Verifica se o usuário já está logado ao entrar na tela
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.replace("/MainScreen");
      } else {
        setLoading(false); // Libera o formulário se não estiver logado
      }
    });

    return unsubscribe;
  }, []);

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      router.replace("/MainScreen");
    } catch (error) {
      alert("Erro ao fazer login: ");
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6A1B9A" />
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <IconButton
        icon="arrow-left"
        size={25}
        onPress={() => router.replace("FirstScreen")}
        iconColor="black"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          zIndex: 10,
          borderColor: "black",
          borderWidth: 2,
        }}
      />

      <Image source={require("../../../assets/LoginImage.png")} style={styles.image} />

      <Text style={styles.title}>Entrar</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="E-mail"
          value={email}
          mode="outlined"
          onChangeText={setEmail}
          style={styles.inputText}
          underlineColor="transparent"
          right={<TextInput.Icon icon="email" color="#6A1B9A" />}
          theme={{
            colors: { outline: "#6A1B9A", primary: "#6A1B9A", background: "transparent" },
            roundness: 10,
          }}
        />

        <TextInput
          label="Senha"
          mode="outlined"
          value={password}
          secureTextEntry={isVisible}
          onChangeText={setPassword}
          style={styles.inputText}
          underlineColor="transparent"
          right={
            <TextInput.Icon
              icon={isVisible ? "eye-off" : "eye"}
              color="#6A1B9A"
              onPress={() => setIsVisible(!isVisible)}
            />
          }
          theme={{
            colors: { outline: "#6A1B9A", primary: "#6A1B9A", background: "transparent" },
            roundness: 10,
          }}
        />

        <TouchableOpacity onPress={() => router.push("ResetPasswordScreen")}>
          <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <Text>
          Ainda não possui uma conta?{" "}
          <Text onPress={() => router.push("NewUserScreen")} style={{ color: "#6B24B8" }}>
            Cadastre-se
          </Text>
        </Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3D3FF",
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
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 5,
    paddingBottom: 20,
  },
  inputText: {
    width: "90%",
    marginBottom: 15,
    backgroundColor: "transparent",
  },
  forgotPassword: {
    color: "#6A1B9A",
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 5,
    alignSelf: "flex-end",
  },
  loginButton: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A1B9A",
    marginTop: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
