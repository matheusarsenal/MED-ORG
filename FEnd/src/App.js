import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
import TelaEscolhaCadastro from './screens/TelaEscolhaCadastro';
import CadastroMedico from './screens/CadastroMedico';
import CadastroPaciente from './screens/CadastroPaciente';
import CadastroSecretario from './screens/CadastroSecretario';
 
const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Escolha">
<Stack.Screen name="Escolha" component={TelaEscolhaCadastro} options={{ title: 'Bem-vindo' }} />
<Stack.Screen name="CadastroMedico" component={CadastroMedico} options={{ title: 'Cadastro Médico' }} />
<Stack.Screen name="CadastroPaciente" component={CadastroPaciente} options={{ title: 'Cadastro Paciente' }} />
<Stack.Screen name="CadastroSecretario" component={CadastroSecretario} options={{ title: 'Cadastro Secretário' }} />
</Stack.Navigator>
</NavigationContainer>
  );
}
