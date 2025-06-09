import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TelaEscolhaCadastro from './Screens/TelaEscolhaCadastro';
import CadastroMedico from './Screens/PagCadMedico';
import CadastroPaciente from './Screens/PagCadPaciente';
import CadastroSecretario from './Screens/PagCadSecretario';
import HomeScreen from './Screens/Home';
import PrescricaoMedica from './Screens/PrescricaoMedica'
import PrescricaoPaciente from './Screens/PrescricaoPaciente'
import Suporte from './Screens/PagSuporte'
import Chat from './Screens/BatePapo'
import MenuServicos from './Screens/Servicos';
import HomeMedico from './Screens/HomeMedico';
import HomePaciente from './Screens/HomePaciente';
import HomeSecretario from './Screens/HomeSecretario';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/escolha" element={<TelaEscolhaCadastro />} />
        <Route path="/cadastro-medico" element={<CadastroMedico />} />
        <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="/cadastro-secretario" element={<CadastroSecretario />} />
        <Route path="/prescricao-medica" element={<PrescricaoMedica />} />
        <Route path="/prescricao-paciente" element={<PrescricaoPaciente />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/servicos-oferecidos" element={<MenuServicos />} />
        <Route path="/home-medico" element={<HomeMedico />} />
        <Route path="/home-secretario" element={<HomeSecretario />} />
        <Route path="/home-paciente" element={<HomePaciente />} />
      </Routes>
    </Router>
  )
}
