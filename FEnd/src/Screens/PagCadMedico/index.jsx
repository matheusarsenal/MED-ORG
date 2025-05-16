import './style.css';
import { useState } from 'react';

function CadastroMedico() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    sexo: '',
    especializacao: '',
    crm: '',
    formacao: '',
    senha: '',
    confirmarSenha: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const senhaValida = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    if (formData.senha !== formData.confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    if (!senhaValida.test(formData.senha)) {
      alert('A senha deve conter ao menos uma letra maiúscula e um símbolo especial.');
      return;
    }

    console.log('Cadastro médico enviado:', formData);
  };

  return (
    <div className="telaCadastro">
      <form onSubmit={handleSubmit}>
        <img src={MedLogo} alt="Logo" />
        <h1>Cadastro Médico</h1>
        
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <select
          name="sexo"
          value={formData.sexo}
          onChange={handleChange}
          required
        >
          <option value="">Selecione o sexo</option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
          <option value="Outro">Outro</option>
        </select>

        <input
          type="text"
          name="especializacao"
          placeholder="Especialização"
          value={formData.especializacao}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="crm"
          placeholder="CRM"
          value={formData.crm}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="formacao"
          placeholder="Formação"
          value={formData.formacao}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="senha"
          placeholder="Senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar Senha"
          value={formData.confirmarSenha}
          onChange={handleChange}
          required
        />
        
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroMedico;
