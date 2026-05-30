import { router } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (email.trim() === "" || senha.trim() === "") {
      alert("Preencha e-mail e senha.");
      return;
    }

    router.push("/principal");
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.icon}>🎓</Text>
        <Text style={styles.title}>TaskUni</Text>
        <Text style={styles.subtitle}>Acesse sua rotina acadêmica</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail do aluno"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={entrar}>
          <Text style={styles.buttonText}>Entrar no App</Text>
        </TouchableOpacity>

        <Text style={styles.helper}>
          Login demonstrativo para validação da primeira fase.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1d4ed8",
    justifyContent: "center",
    padding: 24,
  },
  box: {
    backgroundColor: "#fff",
    borderRadius: 24,
    padding: 26,
  },
  icon: {
    fontSize: 60,
    textAlign: "center",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1d4ed8",
  },
  subtitle: {
    textAlign: "center",
    color: "#475569",
    fontSize: 16,
    marginBottom: 25,
  },
  input: {
    backgroundColor: "#f1f5f9",
    borderRadius: 14,
    padding: 15,
    fontSize: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#cbd5e1",
  },
  button: {
    backgroundColor: "#1d4ed8",
    padding: 16,
    borderRadius: 14,
    marginTop: 8,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  helper: {
    textAlign: "center",
    color: "#64748b",
    fontSize: 13,
    marginTop: 16,
  },
});