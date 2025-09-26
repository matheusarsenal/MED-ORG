"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const PerfilMedico = () => {
  const router = useRouter();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  if (!usuario) return <p>Nenhum usuário encontrado.</p>;

  const { nome, email, crm, especialidade, tipo } = usuario;

  return (
    <div className="perfil-wrapper">
      <div className="perfil-container">
        <header className="perfil-header">
          <span>👨‍⚕️ Perfil do Médico</span>
          <button className="btn-voltar" onClick={() => router.push("/HomeMedico")}>
            ← Voltar
          </button>
        </header>

        <div className="perfil-dados">
          <div><strong>Nome:</strong> {nome || "Não informado"}</div>
          <div><strong>Email:</strong> {email || "Não informado"}</div>
          <div><strong>CRM:</strong> {crm || "Não informado"}</div>
          <div><strong>Especialidade:</strong> {especialidade || "Não informada"}</div>
          <div><strong>Tipo:</strong> {tipo || "Não informado"}</div>
        </div>

        <div className="perfil-acoes">
          <button className="btn-editar">✏️ Editar Perfil</button>
          <button className="btn-sair" onClick={() => { localStorage.removeItem("usuario"); router.push("/"); }}>
            🚪 Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerfilMedico;
