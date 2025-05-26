import React, { useState } from 'react';
import MedLogo from '../../assets/Med-org.jpg';
import { useNavigate } from 'react-router-dom';
import './style.css';

export default function HomeScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [manterConectado, setManterConectado] = useState(false);

  const excluirConta = async () => {
    const confirmacao = window.confirm('Tem certeza que deseja excluir sua conta? Esta ação é irreversível.');
    if (!confirmacao) return;

    try {
      const params = new URLSearchParams();
      params.append('email', email);
      params.append('senha', senha);

      const response = await fetch('http://localhost/api/deletar_usuario.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      const data = await response.json();
      if (data.sucesso) {
        alert('Conta excluída com sucesso!');
        setEmail('');
        setSenha('');
      } else {
        alert(`Erro: ${data.mensagem}`);
      }
    } catch (error) {
      alert('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="telaLogin">
      <img src={MedLogo} alt="Logo MedOrg" />
      <h1>Login</h1>

      <form onSubmit={(e) => e.preventDefault()}>
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

        <button
          type="button"
          style={{ backgroundColor: 'red', color: 'white' }}
          onClick={excluirConta}
        >
          Excluir Conta
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