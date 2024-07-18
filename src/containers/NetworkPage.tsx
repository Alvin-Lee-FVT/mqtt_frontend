import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FvtLogo } from "../assets/FvtLogo";

// Define keyframes for fade-in animation
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Define keyframes for fade-in animation
const verticalAnimation = keyframes`
  from {
    top: 120px;
  }
  to {
    top: 50px;
  }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    height: 100%;
`;

const HeaderContainer = styled.div`
    height: 170px;
    padding: 8px;
    display: flex;
    padding-right: 50px;
    justify-content: right;
`;

const LogoContainer = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    animation: ${verticalAnimation} 1s ease-in-out forwards;
    justify-content: center;
    display: flex;
`;

const SystemInfo = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.4px;
`;
const TimeInfo = styled.div`
    margin-right: 16px;
`;

const MainPanel = styled.div`
    width: 100%;
    flex: 1;
    padding: 16px;
    align-items: stretch;
    display: flex;
    opacity: 0;
    justify-content: center;
    animation: ${fadeInAnimation} 1.5s 0.8s forwards;
`;

const NetworkContainer = styled.div`
    flex: 0.5;
    border-radius: 65px;
    box-shadow: rgba(0, 0, 0, 0.22) 1px 11px 20px 7px;
`;

const ListTitle = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 40px;
    color: white;
    background: #404040;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const ListItem = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 100px;
    padding-right: 100px;

    font-size: 30px;
    color: black;
    background: white;
    opacity: 0.5;
`;

export const NetworkPage: React.FC = (prop) => {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const [currentDate, setCurrentDate] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateDay = () => {
            // retrieve current day of the week
            const now = new Date();
            const currentDay = daysOfWeek[now.getDay()];
            setCurrentDate(currentDay);
        };

        updateDay(); // Initial call to set the current time
        const timer = setInterval(updateDay, 1000); // Update every second to handle minute changes

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // retrieve current hour and minute
        const updateTime = () => {
            const now = new Date();
            let hours = String(now.getHours() % 12).padStart(2, "0");
            const ampm = now.getHours() >= 12 ? "PM" : "AM";

            hours = hours ? hours : "12"; // The hour '0' should be '12'

            const minutes = String(now.getMinutes()).padStart(2, "0");
            const seconds = String(now.getSeconds()).padStart(2, "0");
            setCurrentTime(`${hours}:${minutes} ${ampm}`);
        };

        updateTime(); // Initial call to set the current time
        const timer = setInterval(updateTime, 1000); // Update every second to handle minute changes

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <MainContainer>
            <LogoContainer>
                <FvtLogo />
            </LogoContainer>
            {/* Header information: service menu button, logo, time date */}
            <HeaderContainer>
                <SystemInfo>
                    <TimeInfo>
                        {currentDate} &nbsp; {currentTime}
                    </TimeInfo>
                </SystemInfo>
            </HeaderContainer>
            <MainPanel>
                <NetworkContainer>
                    <ListTitle>Network</ListTitle>
                    <ListItem>
                        <div>TELUS XXXXX</div>
                        <div>test</div>
                    </ListItem>
                </NetworkContainer>
            </MainPanel>
        </MainContainer>
    );
};
