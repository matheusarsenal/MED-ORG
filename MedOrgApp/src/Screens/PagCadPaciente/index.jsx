import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Switch,
  ScrollView,
} from "react-native";

export default function CadastroPaciente() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    sexo: "",
    dataNascimento: "",
    cpf: "",
    telefone: "",
    endereco: "",
    possuiPlano: false,
    fornecedoraPlano: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    console.log("Cadastro de paciente enviado:", formData);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Paciente</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(text) => handleChange("nome", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={formData.email}
        keyboardType="email-address"
        onChangeText={(text) => handleChange("email", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo (Masculino, Feminino, Outro)"
        value={formData.sexo}
        onChangeText={(text) => handleChange("sexo", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (dd/mm/aaaa)"
        value={formData.dataNascimento}
        onChangeText={(text) => handleChange("dataNascimento", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={formData.cpf}
        onChangeText={(text) => handleChange("cpf", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={formData.telefone}
        keyboardType="phone-pad"
        onChangeText={(text) => handleChange("telefone", text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={formData.endereco}
        onChangeText={(text) => handleChange("endereco", text)}
      />

      <View style={styles.switchContainer}>
        <Text>Possui plano de saúde?</Text>
        <Switch
          value={formData.possuiPlano}
          onValueChange={(value) => handleChange("possuiPlano", value)}
        />
      </View>

      {formData.possuiPlano && (
        <TextInput
          style={styles.input}
          placeholder="Fornecedora do Plano"
          value={formData.fornecedoraPlano}
          onChangeText={(text) => handleChange("fornecedoraPlano", text)}
        />
      )}

      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1976D2",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    justifyContent: "space-between",
  },
});
