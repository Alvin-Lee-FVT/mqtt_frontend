import React, { useEffect } from "react";
import styled, { keyframes, ThemeContext } from "styled-components";
import { FvtLogo } from "../assets/FvtLogo";
import { useNavigate } from "react-router-dom";

type LoadingProps = {
    devVersion?: string;
};

// Define the keyframes for the animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

// Define keyframes for fade-in animation
const verticalAnimation = keyframes`
  from {
    top: 353px
  }
  to {
    top: 200px;
  }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    height: 100vh;
    justify-content: center;
    text-align: center;
    align-items: center;
`;

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    position: absolute;
    top: 353px;
    animation: ${verticalAnimation} 1.5s ease-in-out forwards;
`;

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: ${fadeIn} 2s 1s ease-in-out forwards;
`;

const Spinner = styled.div`
    border: 4px solid #ffffff33;
    border-top: 4px solid #33aaff;
    border-radius: 50%;
    width: 70px;
    height: 70px;
    animation: spin 2s 1s linear infinite;
`;

export const Loading: React.FC<LoadingProps> = (prop) => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/network");
        }, 5000);
    }, []); // Empty dependency array means it runs only on mount
    return (
        <MainContainer>
            <LogoContainer>
                <FvtLogo />
            </LogoContainer>
            <SpinnerContainer>
                <Spinner></Spinner>
            </SpinnerContainer>
            {/* <VersionInfo>Version: {prop.devVersion ?? "1.0"}</VersionInfo> */}
        </MainContainer>
    );
};
