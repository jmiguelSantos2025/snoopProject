import { View, Image, StyleSheet, Text, TouchableOpacity, Platform, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-paper"; 
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordScreen() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSendCode = async () => {
    const auth = getAuth();

    if (email === "") {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setSuccessMessage("Código enviado para o seu e-mail!");
      setError("");
    } catch (error) {
      setError("Erro ao enviar o código. Verifique o e-mail.");
      setSuccessMessage("");
      
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Text style={styles.title}>Redefinir sua senha</Text>
      <Text style={styles.subtitle}>
        Insira o endereço de e-mail para obter o link e redefinir sua senha
      </Text>

      <View style={styles.inputContainer}>
        <TextInput
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          style={styles.inputText}
          underlineColor="transparent"
          left={<TextInput.Icon icon="email" color="#6A1B9A" />}
          theme={{
            colors: { outline: "#6A1B9A", primary: "#6A1B9A", background: "transparent" },
            roundness: 10,
          }}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}

      <Image source={require("../../../assets/GrizzySee.png")} style={styles.image} />
      <Text style={styles.expiryText}>Este código expira em 5 minutos</Text>

      <TouchableOpacity style={styles.button} onPress={handleSendCode}>
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
    backgroundColor: "#F3D3FF",
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6A1B9A",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    color: "#6A1B9A",
    marginBottom: 25,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30, 
  },
  inputText: {
    width: "90%",
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderColor: "#6A1B9A",
    marginBottom: 15,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    marginBottom: 15,
  },
  successText: {
    fontSize: 16,
    color: "green",
    marginBottom: 15,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 25, 
  },
  expiryText: {
    fontSize: 14,
    color: "#6A1B9A",
    marginBottom: 25, 
    textAlign: "center",
  },
  button: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6B24B8",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
