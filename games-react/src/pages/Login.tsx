import { useState } from "react"
import Header from "../components/Header"



const Login = () => {

const [email, setEmail] = useState<String>()
const [senha,setSenha] = useState<String>()

    return(

    <div>   
        
        <Header />
    <hr/>
    <div>
<label>Email</label>
<input type="email" value={email} onChange={alterarValorEmail}/>
    </div>
    <div>
<label>Senha</label>
<input type="password" value={senha}/>

    </div>

    <div>
        <button type="submit">Entrar</button>
    </div>
    </div>
      
    )
}       

export default Login