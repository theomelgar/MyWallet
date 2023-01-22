import styled from "styled-components"
const LogInStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 160px auto;
    gap: 10px;
    
    h1{
        font-family: 'Saira Stencil One';
        font-style: normal;
        font-weight: 400;
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
    p{
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FFFFFF;
    }
`
export default LogInStyle