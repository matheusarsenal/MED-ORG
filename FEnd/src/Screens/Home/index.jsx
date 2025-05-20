import React, { useState } from 'react';
import MedLogo from '../../assets/Med-org.jpg';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  return (
    <div className="telaLogin">
      <img src={MedLogo} alt="Logo MedOrg" />

      <h1>Login</h1>

      <form>
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Digite sua senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button type="button" onClick={() => navigate('/escolha')}>
          Criar Conta
        </button>

        <button type="button" onClick={() => {
          // Lógica de login aqui...
        }}>
          Entrar
        </button>

        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px' }}>
          <input
            type="checkbox"
            checked={manterConectado}
            onChange={(e) => setManterConectado(e.target.checked)}
          />
          Manter-me Conectado
        </label>
      </form>
    </div>
  );
}
