import styled from "styled-components"

const StyleRegister = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 60px auto;
    gap: 30px;
    
    h1{
        padding-right:100px;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;

        color: #FFFFFF;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 7px;
        input{
            width: 303px;
            height: 45px;
            background: #FFFFFF;
            border: 1px solid #D5D5D5;
            border-radius: 5px;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
            &::placeholder{
                color: #DBDBDB;
            }
            &:disabled{
                color: #AFAFAF;
            }
        }
        button{
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            width: 303px;
            height: 45px;
            font-weight: 700;
            font-size: 20px;
            line-height: 23px;
            color: #FFFFFF;
            background: #A328D6;
            border-radius: 5px;
            border: none;
            &:hover{
                cursor: pointer;
            }
        }
    }
`
export default StyleRegister