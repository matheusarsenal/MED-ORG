import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TelaEscolhaCadastro from './Screens/TelaEscolhaCadastro';
import CadastroMedico from './Screens/PagCadMedico';
import CadastroPaciente from './Screens/PagCadPaciente';
import CadastroSecretario from './Screens/PagCadSecretario';
import HomeScreen from './Screens/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/escolha" element={<TelaEscolhaCadastro />} />
        <Route path="/cadastro-medico" element={<CadastroMedico />} />
        <Route path="/cadastro-paciente" element={<CadastroPaciente />} />
        <Route path="/cadastro-secretario" element={<CadastroSecretario />} />
      </Routes>
    </Router>
  )
}
