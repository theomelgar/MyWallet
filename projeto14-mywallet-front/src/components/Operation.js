import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { api } from "../services/auth";

export default function Operation({ activity, token, setUpdate, update}) {
    const navigate = useNavigate()

    async function deleteOperation(op, event) {
        event.stopPropagation();
        if (window.confirm(`Deseja realmente remover: ${op.description}?`)) {
            try {
                const request = await api.delete(`/home/${op._id}`, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    },
                });
                if (request.data === "Deleted") alert("Movimentação removida com sucesso!");
                else alert("Erro ao remover movimentação!");
            } catch (error) {
                alert("Erro ao remover movimentação!");
            }
            setUpdate(!update)
        }
    }

    const edit = (op) => navigate(op.type==="income" ? `/editar-entrada/${op._id}` : `/editar-saida/${op._id}`)

    return (
        <StyleOperation >
            <Time>{activity.time}</Time>
            <Description onClick={() => {edit(activity)}}>{activity.description}</Description>
            {activity.type === "income" ?
            <ValueI>{Number(activity.value).toFixed(2).replace(".", ",")}</ValueI>
            :
            <ValueO>{Number(activity.value).toFixed(2).replace(".", ",")}</ValueO>}
            <Del onClick={(event) => deleteOperation(activity, event)}>
                x
            </Del>
        </StyleOperation>
    )

}

const StyleOperation = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 25px;
    margin: 10px;
    color: black;
    position: relative;
`
const Time = styled.div`
    position: absolute;
    top: 0;
    left: 4%;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`
const Description = styled.div`
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 20%;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`
const ValueI = styled.div`
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 10%;
    line-height: 19px;
    text-align: right;
    color: #03AC00;
`

const ValueO = styled.div`
    font-size: 16px;
    position: absolute;
    top: 0;
    right:10%;
    line-height: 19px;
    text-align: right;
    color: #C70000;
`
const Del = styled.div`
    font-size: 16px;
    position: absolute;
    top: 0;
    right: 5%;
    line-height: 19px;
    text-align: right;
    color: gray;
    cursor: pointer;
`