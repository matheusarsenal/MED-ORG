import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function CadastroMedico({ navigation }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    sexo: '',
    especializacao: '',
    crm: '',
    formacao: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (name, value) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const senhaValida = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    if (formData.senha !== formData.confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem!');
      return;
    }

    if (!senhaValida.test(formData.senha)) {
      Alert.alert('Erro', 'A senha deve conter ao menos uma letra maiúscula e um símbolo especial.');
      return;
    }

    console.log('Cadastro médico enviado:', formData);
    Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro Médico</Text>

      <TextInput placeholder="Nome" style={styles.input} value={formData.nome} onChangeText={text => handleChange('nome', text)} />
      <TextInput placeholder="E-mail" style={styles.input} value={formData.email} onChangeText={text => handleChange('email', text)} keyboardType="email-address" />
      <TextInput placeholder="Sexo" style={styles.input} value={formData.sexo} onChangeText={text => handleChange('sexo', text)} />
      <TextInput placeholder="Especialização" style={styles.input} value={formData.especializacao} onChangeText={text => handleChange('especializacao', text)} />
      <TextInput placeholder="CRM" style={styles.input} value={formData.crm} onChangeText={text => handleChange('crm', text)} />
      <TextInput placeholder="Formação" style={styles.input} value={formData.formacao} onChangeText={text => handleChange('formacao', text)} />
      <TextInput placeholder="Senha" style={styles.input} secureTextEntry value={formData.senha} onChangeText={text => handleChange('senha', text)} />
      <TextInput placeholder="Confirmar Senha" style={styles.input} secureTextEntry value={formData.confirmarSenha} onChangeText={text => handleChange('confirmarSenha', text)} />

      <Button title="Cadastrar" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1976D2',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});
