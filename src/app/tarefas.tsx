import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type Tarefa = {
  id: string;
  titulo: string;
  data: string;
  materia: string;
  concluida: boolean;
};

export default function Tarefas() {
  const [titulo, setTitulo] = useState("");
  const [data, setData] = useState("");
  const [materia, setMateria] = useState("");

  const [tasks, setTasks] = useState<Tarefa[]>([
    {
      id: "1",
      titulo: "Estudar para prova",
      data: "29/05/2026",
      materia: "Banco de Dados",
      concluida: false,
    },
    {
      id: "2",
      titulo: "Entregar projeto React Native",
      data: "30/05/2026",
      materia: "Desenvolvimento Mobile",
      concluida: false,
    },
    {
      id: "3",
      titulo: "Revisar trabalho da faculdade",
      data: "31/05/2026",
      materia: "Auditoria de Sistemas",
      concluida: true,
    },
  ]);

  function adicionarTarefa() {
    if (titulo.trim() === "" || data.trim() === "" || materia.trim() === "") {
      alert("Preencha todos os campos.");
      return;
    }

    const nova = {
      id: Date.now().toString(),
      titulo,
      data,
      materia,
      concluida: false,
    };

    setTasks([nova, ...tasks]);
    setTitulo("");
    setData("");
    setMateria("");
  }

  function concluir(id: string) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, concluida: !task.concluida } : task
      )
    );
  }

  function excluir(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 TaskUni</Text>
      <Text style={styles.subtitle}>Organização de tarefas acadêmicas</Text>

      <View style={styles.form}>
        <Text style={styles.formTitle}>Nova Tarefa</Text>

        <TextInput
          style={styles.input}
          placeholder="Título da tarefa"
          value={titulo}
          onChangeText={setTitulo}
        />

        <TextInput
          style={styles.input}
          placeholder="Data: 30/05/2026"
          value={data}
          onChangeText={setData}
        />

        <TextInput
          style={styles.input}
          placeholder="Matéria ou disciplina"
          value={materia}
          onChangeText={setMateria}
        />

        <TouchableOpacity style={styles.addButton} onPress={adicionarTarefa}>
          <Text style={styles.buttonText}>+ Adicionar Tarefa</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.taskTitle}>{item.titulo}</Text>

              <Text
                style={[
                  styles.status,
                  item.concluida ? styles.done : styles.pending,
                ]}
              >
                {item.concluida ? "Concluída" : "Pendente"}
              </Text>
            </View>

            <Text style={styles.info}>📅 Data: {item.data}</Text>
            <Text style={styles.info}>📘 Matéria: {item.materia}</Text>

            <View style={styles.actions}>
              <TouchableOpacity
                style={styles.finishButton}
                onPress={() => concluir(item.id)}
              >
                <Text style={styles.buttonText}>
                  {item.concluida ? "Reabrir" : "Concluir"}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => excluir(item.id)}
              >
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: "#1d4ed8",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    color: "#475569",
    marginBottom: 20,
  },
  form: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#111827",
  },
  input: {
    borderWidth: 1,
    borderColor: "#cbd5e1",
    borderRadius: 12,
    padding: 13,
    marginBottom: 10,
    fontSize: 15,
    backgroundColor: "#f8fafc",
  },
  addButton: {
    backgroundColor: "#16a34a",
    padding: 14,
    borderRadius: 12,
  },
  card: {
    backgroundColor: "#fff",
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    flex: 1,
  },
  status: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    fontWeight: "bold",
    fontSize: 12,
    overflow: "hidden",
  },
  done: {
    backgroundColor: "#dcfce7",
    color: "#15803d",
  },
  pending: {
    backgroundColor: "#fee2e2",
    color: "#b91c1c",
  },
  info: {
    marginTop: 8,
    fontSize: 15,
    color: "#374151",
  },
  actions: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },
  finishButton: {
    flex: 1,
    backgroundColor: "#1d4ed8",
    padding: 12,
    borderRadius: 12,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "#dc2626",
    padding: 12,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});