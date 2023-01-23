import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../services/auth"
import Loading from "../components/Loading"
import { InfoContext } from "../context/info"
import StyleRegister from "../components/StyleRegister.js"

export default function Income(){
    const { UserData } = useContext(InfoContext)
    const token = UserData.token
    const [value, setValue] = useState()
    const [description, setDescription] = useState()
    const [load, setLoad] = useState("Salvar entrada")
    const [off, setOff] = useState(false)
    const navigate = useNavigate()

    function send(e) {
        e.preventDefault(); // impede o redirecionamento

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        const data = {
            value: value,
            description: description
        };
        api
            .post(
                `/nova-entrada`, data,config
            )
            .then(() => {
                setLoad("Salvar entrada")
                navigate("/home")
                setLoad("Salvar entrada")
                setOff(false)
            }
            )
            .catch((error) => {
                alert(error.response.data.message)
                setLoad("Salvar entrada")
                setOff(false)
            }
            );
    }

    return(
        <StyleRegister>
            <h1>
                Nova entrada
            </h1>
            <form onSubmit={send}>
            <input
                    type="text"
                    id="value"
                    placeholder="Valor"
                    value={value}
                    required
                    disabled={off}
                    onChange={e => setValue(e.target.value)}
                />
            <input
                    type="text"
                    id="description"
                    placeholder="Descrição"
                    value={description}
                    required
                    disabled={off}
                    onChange={e => setDescription(e.target.value)}
                />
            <button type="submit" onClick={() => {
                    setLoad(Loading)
                    setOff(true)
                }}>{load}</button>
            </form>
        </StyleRegister>
    )
}

