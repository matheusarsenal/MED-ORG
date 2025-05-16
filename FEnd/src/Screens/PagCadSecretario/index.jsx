import '../style.css';
import { useState } from 'react';

export default function CadastroSecretario() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cpf: '',
    sexo: '',
    dataNascimento: '',
    endereco: '',
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

    console.log('Cadastro de secretário enviado:', formData);
  };

  return (
    <div className="telaCadastro">
      <form onSubmit={handleSubmit}>
        <h1>Cadastro de Secretário(a)</h1>

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
            name="cpf" 
            placeholder="CPF" 
            value={formData.cpf} 
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
            value={formData.dataNascimento} 
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
