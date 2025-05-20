import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function CadastroSecretario({ navigation }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    sexo: '',
    dataNascimento: '',
    endereco: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = () => {
    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem.');
      return;
    }

    console.log('Cadastro de secretário enviado:', formData);
    alert('Cadastro realizado com sucesso!');
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro de Secretário</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={formData.nome}
        onChangeText={(text) => handleChange('nome', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={formData.email}
        keyboardType="email-address"
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Telefone"
        value={formData.telefone}
        keyboardType="phone-pad"
        onChangeText={(text) => handleChange('telefone', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={formData.cpf}
        onChangeText={(text) => handleChange('cpf', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Sexo"
        value={formData.sexo}
        onChangeText={(text) => handleChange('sexo', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento (DD/MM/AAAA)"
        value={formData.dataNascimento}
        onChangeText={(text) => handleChange('dataNascimento', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={formData.endereco}
        onChangeText={(text) => handleChange('endereco', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={formData.senha}
        onChangeText={(text) => handleChange('senha', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
        value={formData.confirmarSenha}
        onChangeText={(text) => handleChange('confirmarSenha', text)}
      />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#388E3C',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
});
