import React, { useState } from "react";
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(false);

  const excluirConta = async () => {
    Alert.alert(
      "Excluir Conta",
      "Tem certeza que deseja excluir sua conta? Esta ação é irreversível.",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              const params = new URLSearchParams();
              params.append("email", email);
              params.append("senha", senha);

              const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/paciente/delete.php`, {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: params.toString(),
              });

              const data = await res.json();
              if (data?.sucesso) {
                Alert.alert("Sucesso", "Conta excluída com sucesso!");
                setEmail(""); 
                setSenha("");
              } else {
                Alert.alert("Erro", data?.mensagem || "Falha ao excluir.");
              }
            } catch {
              Alert.alert("Erro", "Erro ao conectar com o servidor.");
            }
          }
        }
      ]
    );
  };

  return (
    <LinearGradient colors={["#f9eaf8", "rgba(232,252,255,0.8)"]} style={styles.container}>
      <Image
        source={require("../assets/Med-org.jpg")}
        style={styles.logo}
      />

      <Text style={styles.title}>Login</Text>

      <View style={styles.card}>
        <TextInput
          placeholder="Digite seu email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TextInput
          placeholder="Digite sua senha"
          style={styles.input}
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <View style={styles.actions}>
          <TouchableOpacity
            style={[styles.btn, styles.btnNeutral]}
            onPress={() => router.push("/TelaEscolhaCadastro")}
          >
            <Text style={styles.btnText}>Criar Conta</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnPrimary]}>
            <Text style={styles.btnText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnDanger]} onPress={excluirConta}>
            <Text style={styles.btnText}>Excluir Conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 64,
    paddingHorizontal: 16,
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 5,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 20,
    color: "#0f172a",
  },

  card: {
    width: "100%",
    maxWidth: 560,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#d1d5db",
  },

  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 14,
  },

  actions: {
    flexDirection: "column",
    gap: 10,
  },

  btn: {
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 10,
  },

  btnText: {
    fontWeight: "700",
    color: "#fff",
  },

  btnPrimary: {
    backgroundColor: "#2563eb",
  },

  btnNeutral: {
    backgroundColor: "#e5e7eb",
  },

  btnDanger: {
    backgroundColor: "#e11d48",
  },
});
