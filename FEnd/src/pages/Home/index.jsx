return (
    <div className="telaLogin">
      <form id="login">
        <img src={MedLogo} alt="MedOrg Logo" />
        <h1>Login</h1>
        
        <input 
          type="email" 
          name="email" 
          placeholder="Digite seu email" 
          required 
        />
        
        <input 
          type="password" 
          name="senha" 
          placeholder="Digite sua senha" 
          required 
        />
        
        <button id="create" type="button">Criar Conta</button>
        <button id="enter" type="submit">Entrar</button>
      </form>
    </div>
  );
