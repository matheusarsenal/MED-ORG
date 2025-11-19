import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../Screens/Home";
import TelaEscolhaCadastro from "../Screens/TelaEscolhaCadastro";
import CadastroMedico from "../Screens/PagCadMedico";
import CadastroPaciente from "../Screens/PagCadPaciente";
import CadastroSecretario from "../Screens/PagCadSecretario";
import PrescricaoMedica from "../Screens/PrescricaoMedica";
import PrescricaoPaciente from "../Screens/PrescricaoPaciente";
import Suporte from "../Screens/PagSuporte";
import Chat from "../Screens/BatePapo";
import MenuServicos from "../Screens/Servicos";
import HomeMedico from "../Screens/HomeMedico";
import HomePaciente from "../Screens/HomePaciente";
import HomeSecretario from "../Screens/HomeSecretario";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EscolhaCadastro" component={TelaEscolhaCadastro} />
        <Stack.Screen name="CadastroMedico" component={CadastroMedico} />
        <Stack.Screen name="CadastroPaciente" component={CadastroPaciente} />
        <Stack.Screen name="CadastroSecretario" component={CadastroSecretario} />
        <Stack.Screen name="PrescricaoMedica" component={PrescricaoMedica} />
        <Stack.Screen name="PrescricaoPaciente" component={PrescricaoPaciente} />
        <Stack.Screen name="Suporte" component={Suporte} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Servicos" component={MenuServicos} />
        <Stack.Screen name="HomeMedico" component={HomeMedico} />
        <Stack.Screen name="HomeSecretario" component={HomeSecretario} />
        <Stack.Screen name="HomePaciente" component={HomePaciente} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
