import React from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { FvtLogo } from "../assets/FvtLogo";
import { useNavigate } from "react-router-dom";

// Define the keyframes for the animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

// Define the keyframes for the animation
const stretch = keyframes`
  0% {
    width: 0px;
    height: 460px;
  }
  100% {
    width: 700px;
    height: 460px;
  }
`;

const MainContainer = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    color: white;
    align-items: center;
`;

const LoginContainer = styled.div`
    width: 700px;
    height: 460px;
    border-radius: 65px;
    box-shadow: rgba(0, 0, 0, 0.22) 1px 11px 20px 7px;
`;

const LogoContainer = styled.div`
    transform: scale(1.3);
    margin-top: 70px;
    margin-bottom: 60px;
    opacity: 0;
    display: flex;
    justify-content: center;
    animation: ${fadeIn} 2s ease-in-out forwards;
`;

const InputContainer = styled.form`
    padding-left: 4rem;
    padding-right: 4rem;
`;

const InputField = styled.div`
    margin-bottom: 2rem;
`;

const InputLabel = styled.label`
    color: rgb(55 65 81);
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    display: block;
    margin-bottom: 0.5rem;
`;

const Input = styled.input`
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    width: 100%;
    color: white;
    background-color: #1a1a1a;
    text-align: center;
    &:focus {
        border-bottom-color: #444444; /* Change bottom border color on focus */
        border-width: 0px 0px 1px 0px;
        animation: ${fadeIn} 1s ease-in-out forwards;
        box-shadow: none !important; /* Remove default box-shadow on focus */
        outline: none;
    }
`;

const Button = styled.button`
    font-weight: 600;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    border-width: 1px;
    cursor: pointer;
    border-radius: 0.25rem;
    transition: 1s;
    &:hover {
        background-color: white;
        opacity: 0.5;
        color: black;
    }
`;
export const Login: React.FC = (prop) => {
    const navigate = useNavigate();

    const signIn = () => {
        navigate("/loading");
    };

    return (
        <MainContainer>
            <LoginContainer>
                <LogoContainer>
                    <FvtLogo />
                </LogoContainer>
                <InputContainer>
                    <InputField>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input
                            id="username"
                            type="text"
                            placeholder="Username"
                        ></Input>
                    </InputField>

                    <InputField>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type="password"
                            placeholder="******************"
                        ></Input>
                    </InputField>
                    <Button onClick={signIn}>Log In</Button>
                </InputContainer>
            </LoginContainer>
        </MainContainer>
    );
};
