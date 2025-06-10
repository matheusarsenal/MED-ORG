import React from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const HomeMedico = () => {
  const navigate = useNavigate();

  const usuarioSalvo = JSON.parse(localStorage.getItem("usuario"));
  const userName = usuarioSalvo?.nome || "Médico";
  const tipoUsuario = usuarioSalvo?.tipo;

  // useEffect(() => {
  //   if(tipoUsuario !== "medico") {
  //     alert("Acesso permitido apenas para médicos.");
  //     navigate("/");
  //   }
  // }, [tipoUsuario, navigate]);

  const menuItems = [
    { label: "Lista de Consultas", icon: "📋", path: "/consultas" },
    { label: "Prescrições Atuais", icon: "💊", path: "/prescricoes" },
    { label: "Criar Prescrição", icon: "✍️", path: "/criar-prescricao" },
    { label: "Chat", icon: "💬", path: "/chat" },
    { label: "Mapa", icon: "📍", path: "/mapa" },
    { label: "Conta", icon: "👤", path: "/conta" },
    { label: "Configurações", icon: "⚙️", path: "/configuracoes" },
    { label: "Suporte", icon: "🛠️", path: "/suporte" },
  ];

  return (
    <div className="home-wrapper">
      <div className="home-container">
        <header className="home-header">
          <span>MED-ORG</span>
          <span className="hora">
            {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
          </span>
        </header>

        <div className="usuario-nome">Olá, {userName}</div>

        <div className="menu-container">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => navigate(item.path)}
              className={`menu-item ${item.label === "Suporte" ? "suporte" : ""}`}
            >
              <span className="menu-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeMedico;