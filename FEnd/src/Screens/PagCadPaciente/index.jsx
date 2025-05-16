import '../style.css';
import { useState } from 'react';

export default function CadastroPaciente() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    sexo: '',
    dataNascimento: '',
    cpf: '',
    telefone: '',
    endereco: '',
    possuiPlano: false,
    fornecedoraPlano: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Cadastro de paciente enviado:', formData);
  };

  return (
    <div className="telaCadastro">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Paciente</h1>

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
          type="date"
          name="dataNascimento"
          placeholder="Data de Nascimento"
          value={formData.dataNascimento}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          value={formData.cpf}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="telefone"
          placeholder="Telefone"
          value={formData.telefone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="endereco"
          placeholder="Endereço"
          value={formData.endereco}
          onChange={handleChange}
          required
        />

        <label className="checkboxLabel">
          <input
            type="checkbox"
            name="possuiPlano"
            checked={formData.possuiPlano}
            onChange={handleChange}
          />
          <span className="checkboxText">Possui plano de saúde</span>
        </label>
        
        {formData.possuiPlano && (
          <input
            type="text"
            name="fornecedoraPlano"
            placeholder="Nome da fornecedora do plano"
            value={formData.fornecedoraPlano}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
