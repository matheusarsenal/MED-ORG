import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

function Chat() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { from: 'system', text: 'Bom dia Robsom. Como você está se sentindo hoje?' },
    { from: 'user', text: 'Olá Dr. Henrique estou um pouco melhor' },
@@ -30,27 +33,29 @@

  return (
    <div className="chat-container">
      <button className="voltar-btn" onClick={() => navigate(-1)}>← Voltar</button>

      <div className="header">
        <span>Dr. Henrique Dias Gonçalves</span>
        <span className="hora">{time}</span>
      </div>

      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.from === 'system' ? 'system-message' : 'user-message'}
          >
            {msg.text}
          </div>
        ))}
      </div>

      <div className="input-container">
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
