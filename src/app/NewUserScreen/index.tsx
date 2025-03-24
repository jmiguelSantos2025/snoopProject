import { View, Image, StyleSheet, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from "react-native";
import { TextInput, IconButton } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { signUp } from "../../components/autenticador";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleSignUp = async () => {
    try {
      const userCredential = await signUp(email, password,fullName);
      const user = userCredential.user;
      // await setDoc(doc(firestore, "users", user.uid), {
      //   fullName: fullName,
      //   email: email,
      // });
      setEmail("");
      setPassword("");
      setFullName("");
      router.push("/LoginScreen");
    } catch (error) {
      alert("Erro ao criar conta: " + error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <IconButton
        icon="arrow-left"
        size={25}
        onPress={() => router.back()}
        iconColor="black"
        style={{ position: "absolute", top: 20, left: 20, zIndex: 10 , borderColor:"black", borderWidth:2,}}
      />

      <Image source={require("../../../assets/LoginImage.png")} style={styles.image} />

      <Text style={styles.title}>Cadastrar</Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="Nome Completo"
          value={fullName}
          onChangeText={setFullName}
          mode="outlined"
          style={styles.inputText}
          right={<TextInput.Icon icon="account-circle" color="#6A1B9A" />}
          underlineColor="transparent"
          theme={{
            colors: { outline: "#6A1B9A", primary: "#6A1B9A", background: "transparent" },
            roundness: 10,
          }}
        />

        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
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
          value={password}
          onChangeText={setPassword}
          secureTextEntry={isVisible}
          mode="outlined"
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
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10 }}>
        <Text>
          Já possui uma conta?{" "}
          <Text onPress={() => router.push("LoginScreen")} style={{ color: "#6B24B8" }}>
            Faça Login
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
