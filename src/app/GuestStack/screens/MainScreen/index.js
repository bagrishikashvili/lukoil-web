import React, { useState, Fragment, useEffect, useContext, useRef } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/media/Logo.svg';
import Login from './Login';
import Registration from './Registration'
const MainScreen = ({history}) => {
    const [isLoading, setLoading] = useState(false);
    const [switcher, setSwitcher] = useState(1);
    const formikRef = useRef();

    console.log(switcher);
    return (
        <Container>
            <LoginContainer>
                <img src={LogoSvg}/>
                <LoginBody>
                    <TextWelcome style={{textAlign: switcher == 1 ? 'center':'left'}}>Welcome to Lukoil</TextWelcome>
                    <TextLogin style={{textAlign: switcher == 1 ? 'center':'left'}}>In order to use our app please log in/sign up</TextLogin>
                    <AuthSwicher>
                        <Switch isActive={1} sw={switcher} onClick={() => setSwitcher(1)}>Log in</Switch>
                        <Switch isActive={2} sw={switcher} onClick={() => setSwitcher(2)}>Sign up</Switch>
                    </AuthSwicher>
                    <LoginArea>
                        {switcher === 1 ? <Login/> : <Registration/>}
                    </LoginArea>
                </LoginBody>
            </LoginContainer>
            
        </Container>
    )
}
const Container = styled.div `
    background-color: #000;
    height: 100vh;
    color: #fff;
    padding: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const LoginContainer = styled.div  `
    padding: 20px;
    max-width: 480px;
    min-width: 480px;
    text-align: center;
    & > img {
        margin-bottom: 15px;
    }
`
const LoginBody = styled.div `
    background-color: #0A0A0A;
    border-radius: 12px;
    padding: 32px;
    transition: all 0.3s;
`
const TextWelcome = styled.span `
    font-family: 'Plus Jakarta Sans';
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    letter-spacing: -0.2800000011920929px;
    text-align: center;
    display: block;
    color: #fff;
`
const TextLogin = styled.span `
    font-family: 'Plus Jakarta Sans';
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    opacity: 0.6;
    margin-top: 7px;
    display: block;
`
const AuthSwicher = styled.div `
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 30px;
`
const Switch = styled.div `
    flex: 1;
    text-align: center;
    border-bottom: ${props => props.isActive === props.sw ? '1px solid #DB2B36' : '1px solid #fff'};
    padding: 20px 0px;
    font-family: Plus Jakarta Sans;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
    opacity: ${props => props.isActive === props.sw ? 1 : .6};
    cursor: pointer;
`
const LoginArea = styled.div `
    transition: all 0.3s;
`
export default MainScreen;