import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, Switch, StyleSheet } from "react-native";
import { router } from "expo-router";
import MedLogo from "../assets/images/MedOrg.png"; // ajuste se necessário

export default function HomeScreen() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [manterConectado, setManterConectado] = useState(false);

  return (
    <View style={styles.container}>
      <Image source={MedLogo} style={styles.logo} />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/escolha-cadastro")}
      >
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.enterButton]}
        onPress={() => {
          // Lógica de login...
        }}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.switchContainer}>
        <Switch
          value={manterConectado}
          onValueChange={setManterConectado}
        />
        <Text style={styles.switchText}>Manter-me Conectado</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginBottom: 10,
    width: "100%",
    alignItems: "center",
  },
  enterButton: {
    backgroundColor: "#28A745",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  switchText: {
    marginLeft: 10,
  },
});
