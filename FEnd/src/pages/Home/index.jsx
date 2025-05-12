import './style.css'
import MedLogo from '../../assets/MedOrg.svg'

function Home() {
  return (
      <div className='telaLogin'>
        <form>
          <img src={MedLogo}/>
          <h1>Login</h1>
          <input email='' type='email'/>
          <input senha='' type='text'/>
          <button id='create' type='button'>Criar Conta</button>
          <button id='enter' type='button'>Entrar</button>
          
        </form>
      </div>
      
  )
}

export default Home
