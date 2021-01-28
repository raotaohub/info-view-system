import styled, { keyframes } from 'styled-components';
import loginBgImg from '../../assets/img/login.jpeg';

const move = keyframes`
    0%{
        width: 0;
        height: 0;
    }
    100%{
        width: 100%;
        height: 100%;
    }
`;

export const Containor = styled.div`
    height: 100%;
    position: relative;
    background: url(${loginBgImg}) no-repeat;
    background-size: 100% 100%;
    .clock-login-wrap{
        position: absolute;
        top: 20px;
        left: 20px;
    }
`;

export const Wrap = styled.div`
    position: absolute;
    width: 800px;
    height: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 400px);
    z-index: 999;
    .g-login-wrap-containor{
        height: 100%;
        width: 100%;
        position: relative;
        background: rgba(4, 129, 201, 0.418);
    }

    ::before{
        content: '';
        animation: ${move} 1s linear infinite alternate;
        transition: all .2s linear;
        position: absolute;
        z-index: -1;
        top: -3px;
        left: -3px;
        width: 100%;
        height: 100%;
        border-top: 3px solid rgb(16, 181, 202);
        border-left: 3px solid rgb(16, 181, 202);
    }

    ::after{
        animation: ${move} 1s linear infinite alternate;
        transition: all .2s linear;
        content: '';
        right: -3px;
        bottom: -3px;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        border-right: 3px solid rgb(16, 181, 202);
        border-bottom: 3px solid rgb(16, 181, 202);
    }
`

export const LoginInfo = styled.div`
    position: absolute;
    width: 400px;
    right: 0;
    top: 0;

`;

export const LoginInfoItem = styled.div`
    margin-bottom: 40px;
    padding: 0 20px;
    input{
        height: 50px;
        width: 100%;
        border-radius: 3px;
        background: transparent;
        border: 1px solid #4fa9af;
        box-shadow: 0 0 5px 0px aqua;
        outline: none;
        color: aqua;
        font-size: 20px;
        text-indent: 1em;
        ::placeholder{
            color: rgba(0, 255, 255, 0.7);
        }
    }
`;