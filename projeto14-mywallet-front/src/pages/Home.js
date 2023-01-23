import { InfoContext } from "../context/info";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components";
import { api } from "../services/auth";
import Operation from "../components/Operation";

export default function Home() {
    const { UserData, setUserData } = useContext(InfoContext)
    const token = UserData.token
    const [list, setList] = useState([])
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
    let total = 0
    list.map((s)=> total+=s.value)
    return (
        <HomeStyle>
            <NavStyle>
                <h1>Olá, {UserData.name}</h1>
                <Exit onClick={signout}>
                    <ion-icon name="log-out-outline" />
                </Exit>
            </NavStyle>
            <RegisterStyle>
                {list.map((activity) => <Operation key={activity._id} activity={activity} />)}
            </RegisterStyle>
            <p>{total}</p>
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
    width: 90%;
    height: 500px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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