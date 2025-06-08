import React from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';

export default function PrescricaoPaciente() {
  const navigate = useNavigate();

  return (
    <div className="prescricao-container">
      <button className="voltar-seta" onClick={() => navigate(-1)}>←</button>
      <h2 className="titulo">Prescrição</h2>

      <div className="prescricao-card">
        <p><strong>Nome do Médico:</strong> Dr. [Nome do Médico]</p>
        <p><strong>Hospital:</strong> [Nome do Hospital]</p>
        <p><strong>Endereço:</strong> [Endereço do Hospital]</p>
        <p><strong>Telefone:</strong> [Telefone]</p>

        <hr />

        <p><strong>Data:</strong> [Data da Prescrição]</p>
        <p><strong>Nome do Paciente:</strong> [Nome do Paciente]</p>
        <p><strong>Data de Nascimento:</strong> [Data de Nascimento]</p>
        <p><strong>Endereço:</strong> [Endereço do Paciente]</p>

        <hr />

        <p><strong>Medicamento:</strong> [Nome do Medicamento]</p>
        <p><strong>Dosagem:</strong> [Dosagem Prescrita]</p>
        <p><strong>Duração do Tratamento:</strong> [Número de dias]</p>

        <hr />

        <p><strong>Observações:</strong> [Observações adicionais]</p>
      </div>
    </div>
  );
}