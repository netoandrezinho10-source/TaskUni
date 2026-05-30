import { StyleSheet, Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Sobre o TaskUni</Text>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Descrição do Projeto</Text>
        <Text style={styles.text}>
          O TaskUni é um aplicativo mobile desenvolvido para ajudar estudantes a
          organizarem tarefas, trabalhos, provas e lembretes acadêmicos.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Objetivo</Text>
        <Text style={styles.text}>
          Facilitar a rotina acadêmica dos estudantes, evitando esquecimentos e
          melhorando a organização das atividades.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Integrantes</Text>
        <Text style={styles.text}>• Vinicius Leite</Text>
        <Text style={styles.text}>• Dyogo Araújo</Text>
        <Text style={styles.text}>• José André Neto</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Tecnologias</Text>
        <Text style={styles.text}>• React Native</Text>
        <Text style={styles.text}>• Expo</Text>
        <Text style={styles.text}>• Expo Router</Text>
        <Text style={styles.text}>• TypeScript</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eef4ff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1d4ed8",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    marginBottom: 15,
  },
  subtitle: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#111827",
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    color: "#333",
  },
});