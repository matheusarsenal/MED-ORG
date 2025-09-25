"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./style.css";

const Configuracao = () => {
  const router = useRouter();
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("usuario"));
    setUsuario(user);
  }, []);

  if (!usuario) {
    return <p>Carregando configurações...</p>;
  }

  const { nome, tipo } = usuario;

  return (
    <div className="config-wrapper">
      <div className="config-container">
        <header className="config-header">
          <h2>⚙️ Configurações</h2>
          <span>Usuário: {nome} ({tipo})</span>
        </header>

        <div className="config-options">
          {/* Opções comuns a todos */}
          <button className="config-item">Alterar Senha</button>
          <button className="config-item">Notificações</button>
          <button className="config-item">Preferências de Tema</button>

          {/* Opções específicas por tipo */}
          {tipo === "medico" && (
            <>
              <button className="config-item">Gerenciar Agenda</button>
              <button className="config-item">Disponibilidade</button>
            </>
          )}

          {tipo === "paciente" && (
            <>
              <button className="config-item">Histórico Médico</button>
              <button className="config-item">Convênios</button>
            </>
          )}

          {tipo === "secretario" && (
            <>
              <button className="config-item">Gerenciar Consultas</button>
              <button className="config-item">Relatórios</button>
            </>
          )}
        </div>

        <footer>
          <button className="btn-voltar" onClick={() => router.back()}>
            ← Voltar
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Configuracao;
