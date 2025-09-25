"use client"
import React from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const PerfilSecretario = () => {
  const router = useRouter();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));

  if (!usuarioSalvo) {
    return (
      <div className="perfil-wrapper">
        <div className="perfil-container">
          <h2>Nenhum secretário encontrado</h2>
          <button className="btn-voltar" onClick={() => router.push("/")}>
            Voltar
          </button>
        </div>
      </div>
    );
  }

  const { nome, email, telefone, setor, tipo } = usuarioSalvo;

  return (
    <div className="perfil-wrapper">
      <div className="perfil-container">
        <header className="perfil-header">
          <span>👤 Perfil do Secretário</span>
          <button className="btn-voltar" onClick={() => router.push("/HomeSecretario")}>
            ← Voltar
          </button>
        </header>

        <div className="perfil-dados">
          <div><strong>Nome:</strong> {nome || "Não informado"}</div>
          <div><strong>Email:</strong> {email || "Não informado"}</div>
          <div><strong>Telefone:</strong> {telefone || "Não informado"}</div>
          <div><strong>Setor:</strong> {setor || "Não informado"}</div>
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

export default PerfilSecretario;
