import Header from "../components/Header";


const Login = () => {

    return(
        <div>
<Header />
<hr />

<div>
    <label>E-mail</label>
    <input type="email"/>
</div>
<div>
    <label>Senha</label>
    <input type="password"/>
</div>
<div>
    <button>Entrar</button>
</div>


        </div>
    )
}

export default Login