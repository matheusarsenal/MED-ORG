import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const PerfilMedico = () => {
  const navigate = useNavigate();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    return (
      <div className="perfil-wrapper">
        <div className="perfil-container">
          <h2>Nenhum usuário encontrado</h2>
          <button className="btn-voltar" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const { nome, email, especialidade, crm, tipo } = usuarioSalvo;

  return (
    <div className="perfil-wrapper">
      <div className="perfil-container">
        <header className="perfil-header">
          <span>👤 Perfil do Médico</span>
          <button className="btn-voltar" onClick={() => navigate("/home-medico")}>
            ← Voltar
          </button>
        </header>

        <div className="perfil-dados">
          <div><strong>Nome:</strong> {nome || "Não informado"}</div>
          <div><strong>Email:</strong> {email || "Não informado"}</div>
          <div><strong>CRM:</strong> {crm || "Não informado"}</div>
          <div><strong>Especialidade:</strong> {especialidade || "Não informada"}</div>
          <div><strong>Tipo de Usuário:</strong> {tipo || "Não informado"}</div>
        </div>

        <div className="perfil-acoes">
          <button className="btn-editar">✏️ Editar Perfil</button>
          <button className="btn-sair" onClick={() => {
            localStorage.removeItem("usuario");
            navigate("/");
          }}>
            🚪 Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilMedico;
