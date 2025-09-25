import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function TelaEscolhaCadastro() {
  const navigate = useNavigate();

  const navegarPara = (tipo) => {
    // Navegar para as rotas: /cadastro-medico, /cadastro-paciente, /cadastro-secretario, etcccc.
    navigate(`/cadastro-${tipo.toLowerCase()}`);
  };

  return (
    <div className="telaEscolha">
      <button className="voltar-btn" onClick={() => navigate('/')}>← Voltar</button>

      <h1 className="titleEscolha">Escolha o tipo de cadastro</h1>

      <button className="botaoEscolha" onClick={() => navegarPara('Medico')}>
        Cadastro Médico
      </button>

      <button className="botaoEscolha" onClick={() => navegarPara('Paciente')}>
        Cadastro Paciente
      </button>

      <button className="botaoEscolha" onClick={() => navegarPara('Secretario')}>
        Cadastro Secretário
      </button>
    </div>
  );
}
