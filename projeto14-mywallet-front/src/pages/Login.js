import StyleLogin from "../components/StyleLogin"
import { Link, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import Loading from "../components/Loading"
import { api } from "../services/auth"

export default function LogIn() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [load, setLoad] = useState("Entrar")
    const [off, setOff] = useState(false)

    const navigate = useNavigate()

    function send(e) {
        e.preventDefault(); // impede o redirecionamento

        const Login = {
            email: email,
            password: password
        };
        api
            .post(
                `/`,
                Login
            )
            .then((response) => {
                navigate("/home")
                setLoad("Entrar")
                setOff(false)
            }
            )
            .catch((error) => {
                alert(error.response.data.message)
                setLoad("Entrar")
                setOff(false)
            }
            );

    }

    return (
        <StyleLogin>
            <h1>MyWallet</h1>
            <form onSubmit={send}>
                <label for="email" />
                <input
                    data-test="email-input"
                    type="email"
                    id="emal"
                    placeholder="email"
                    value={email}
                    required
                    disabled={off}
                    onChange={e => setEmail(e.target.value)}
                />
                <label for="password" />
                <input
                    data-test="password-input"
                    type="password"
                    id="password"
                    placeholder="senha"
                    value={password}
                    required
                    disabled={off}
                    onChange={e => setPassword(e.target.value)}
                />
                <button data-test="login-btn" type="submit" onClick={() => {
                    setLoad(Loading)
                    setOff(true)
                }}>{load}</button>
            </form>
            <Link to="/cadastro" data-test="signup-link">
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </StyleLogin>
    )
}