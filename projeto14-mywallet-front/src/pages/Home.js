import { InfoContext } from "../context/info";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { api } from "../services/auth";
import Operation from "../components/Operation";

export default function Home() {
    const { UserData, setUserData } = useContext(InfoContext)
    const token = UserData.token
    const zero = 0;
    const [list, setList] = useState([])
    const total = list.reduce((acc, cur) => {
        return cur.type === "income" ? acc + parseFloat(cur.value) : acc - parseFloat(cur.value);
    }, zero);
    const [update, setUpdate] = useState(false)
    const navigate = useNavigate()
    const signout = () => {
        localStorage.clear()
        setUserData({})
        navigate('/')
    }

    useEffect(() => {
        api.get(`/home`,
            { headers: { Authorization: `Bearer ${token}` } }
        )
            .then(res => {
                setList(res.data)
                console.log(res.data)
            })
            .catch(err => alert(err.response.data.message))
    }, [update, token])

    const income = () => {
        navigate('/nova-entrada')
    }

    const outcome = () => {
        navigate('/nova-saida')
    }

    return (
        <HomeStyle>
            <NavStyle>
                <h1>Olá, {UserData.name}</h1>
                <Exit onClick={signout}>
                    <ion-icon name="log-out-outline" />
                </Exit>
            </NavStyle>
            <RegisterStyle>
                {list?.length < 1 && <h2>Não há registros de entrada ou saída</h2>}
                {list.map((activity) => <Operation setUpdate={setUpdate} update={update} key={activity._id} activity={activity} token={token}/>)}
                {list?.length > 0 && (
                    <Balance switchColor={total >= 0}>
                        <p>SALDO</p> <span>{total.toFixed(2).replace(".", ",")}</span>
                    </Balance>)}
            </RegisterStyle>

            <OperationsStyle>
                <IncomeStyle onClick={income}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova Entrada</p>
                </IncomeStyle>
                <OutcomeStyle onClick={outcome}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova Saída</p>
                </OutcomeStyle>
            </OperationsStyle>
        </HomeStyle>
    )
}

const HomeStyle = styled.div`
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    color: white;
    gap: 20px;
`

const RegisterStyle = styled.div`
    position: relative;
    width: 90%;
    height: 500px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2{
        color: gray;
        margin: auto;
        font-size: 16px;
    }
`

const Balance = styled.div`
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 90%;
    bottom: 10px;
    left: auto;
    
    p {
        font-size: 25px;
        line-height: 20px;
        color: black;
        font-weight: 700;
    }
    span {
        color: ${(props) => (props.switchColor ? "#03AC00" : "#C70000")};
        font-weight: 700;
        font-size:18px;
    }
`

const OperationsStyle = styled.div`
    width: 100%;    
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom:10px ;
    font-size:20px;
`
const IncomeStyle = styled.div`
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    position: relative;
    cursor: pointer;
    ion-icon{
        font-size: 30px;
        position: absolute;
        left: 5%;
        top: 5%;
    }
    position: relative;
        p{
        position: absolute;
        left: 5%;
        bottom: 5%;
    }
`
const OutcomeStyle = styled.div`
    cursor: pointer;
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    position: relative;
    ion-icon{
        font-size: 30px;
        position: absolute;
        left: 5%;
        top: 5%;
    }
    position: relative;
    p{
        position: absolute;
        left: 5%;
        bottom: 5%;
    }
`
const NavStyle = styled.div`
    width: 100%;
    height: 70px;
    h1{
        position: absolute;
        width: 80%;
        height: 49px;
        left: 25px;
        top: 10px;
        font-size: 26px;
        line-height: 60px;
        color: white;
    }
`
const Exit = styled.div`
    cursor: pointer;
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    text-align: center;
    position: absolute;
    right: 10px;
    top: 15px;
    color: white;
    &:hover{
            transform: scale(1.1);
            opacity: 0.7;
        }
`