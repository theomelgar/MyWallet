import styled from "styled-components"

export default function Operation({ activity, token, setUpdate }) {
    return (
        <StyleOperation >
            <Time>{activity.time}</Time>
            <Description>{activity.description}</Description>
            {activity.type === "income" ?
            <ValueI>{activity.value}</ValueI>
        :
        <ValueO>{activity.value}</ValueO>}
        </StyleOperation>
    )

}

const StyleOperation = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    margin: 10px;
    color: black;
`
const Time = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #C6C6C6;
`
const Description = styled.div`
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
`
const ValueI = styled.div`
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #03AC00;
`

const ValueO = styled.div`
    font-size: 16px;
    line-height: 19px;
    text-align: right;
    color: #C70000;
`