import StyleLogin from "../components/StyleLogin"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../services/auth"
import { useState } from "react"
import Loading from "../components/Loading"

export default function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [password, setPassword] = useState()
    const [load, setLoad] = useState("Cadastrar")
    const [off, setOff] = useState(false)
    const navigate = useNavigate()
    function send(e) {
        e.preventDefault(); // impede o redirecionamento

        const Login = {
            email: email,
            name: name,
            password: password,
            confirmPassword: confirmPassword
        };
        api
            .post(
                `/cadastro`,
                Login
            )
            .then(() => {
                navigate("/")
                setLoad("Cadastrar")
                setOff(false)
            })
            .catch((error) => {
                alert(error.response.data.message)
                setLoad("Cadastrar")
                setOff(false)
            });
    }
    return (
        <StyleLogin>
            <h1>MyWallet</h1>
            <form onSubmit={send}>
                <input
                    type="text"
                    id="name"
                    disabled={off}
                    placeholder="nome"
                    value={name}
                    required
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    id="emal"
                    disabled={off}
                    placeholder="email"
                    value={email}
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    disabled={off}
                    placeholder="senha"
                    value={password}
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    id="confirmPassword"
                    disabled={off}
                    placeholder="confirme a senha"
                    value={confirmPassword}
                    required
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <button type="submit" onClick={() => {
                    setLoad(Loading)
                    setOff(true)
                }}>{load}</button>
            </form>
            <Link to="/">
                <p>Já tem uma conta? Faça login!</p>
            </Link>
        </StyleLogin>
    )
}
