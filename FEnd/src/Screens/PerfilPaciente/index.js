"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const PerfilPaciente = () => {
  const router = useRouter();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    return (
      <div className="perfil-wrapper">
        <div className="perfil-container">
          <h2>Nenhum paciente encontrado</h2>
          <button className="btn-voltar" onClick={() => router.push("/")}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const { nome, email, idade, cpf, planoSaude, tipo } = usuarioSalvo;

  return (
    <div className="perfil-wrapper">
      <div className="perfil-container">
        <header className="perfil-header">
          <span>👤 Perfil do Paciente</span>
          <button className="btn-voltar" onClick={() => router.push("/HomePaciente")}>
            ← Voltar
          </button>
        </header>

        <div className="perfil-dados">
          <div><strong>Nome:</strong> {nome || "Não informado"}</div>
          <div><strong>Email:</strong> {email || "Não informado"}</div>
          <div><strong>Idade:</strong> {idade || "Não informada"}</div>
          <div><strong>CPF:</strong> {cpf || "Não informado"}</div>
          <div><strong>Plano de Saúde:</strong> {planoSaude || "Não informado"}</div>
          <div><strong>Tipo de Usuário:</strong> {tipo || "Não informado"}</div>
        </div>

        <div className="perfil-acoes">
          <button className="btn-editar">✏️ Editar Perfil</button>
          <button
            className="btn-sair"
            onClick={() => {
              localStorage.removeItem("usuario");
              router.push("/");
            }}
          >
            🚪 Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilPaciente;

