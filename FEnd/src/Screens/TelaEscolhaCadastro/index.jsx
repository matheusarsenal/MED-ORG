import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
 
export default function TelaEscolhaCadastro({ navigation }) {
  const navegarPara = (tipo) => {
    Alert.alert(`Ir para cadastro de ${tipo}`);
    // navigation.navigate(`Cadastro${tipo}`); 
  };
 
  return (
<View style={styles.container}>
<Text style={styles.title}>Escolha o tipo de cadastro</Text>
 
      <TouchableOpacity style={styles.button} onPress={() => navegarPara('Medico')}>
<Text style={styles.buttonText}>Cadastro Médico</Text>
</TouchableOpacity>
 
      <TouchableOpacity style={styles.button} onPress={() => navegarPara('Paciente')}>
<Text style={styles.buttonText}>Cadastro Paciente</Text>
</TouchableOpacity>
 
      <TouchableOpacity style={styles.button} onPress={() => navegarPara('Secretario')}>
<Text style={styles.buttonText}>Cadastro Secretário</Text>
</TouchableOpacity>
</View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976D2',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1976D2',
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
