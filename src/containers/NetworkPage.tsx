import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FvtLogo } from "../assets/FvtLogo";
import { Wifi } from "../assets/Wifi";
import { NoWifi } from "../assets/NoWifi";
import Delete from "../assets/delete.svg";
import Edit from "../assets/edit.svg";

import ComfirmModal from "../components/ComfirmModal";
import EditModal from "../components/EditModal";
import AddNetworkModal from "../components/AddNetworkModal";

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
    top: 30px;
  }
`;

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1a1a1a;
    height: 100%;
`;

const HeaderContainer = styled.div`
    height: 100px;
    padding: 8px;
    display: flex;
    padding-right: 50px;
    padding-left: 50px;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    position: absolute;
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

const BatteryInfo = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 20.4px;
    justify-content: center;
    z-index: 2;
`;

const BatteryInfoTitle = styled.div`
    margin-bottom: 12px;
`;

const SerialNum = styled.div`
    display: flex;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
`;

const TimeInfo = styled.div`
    margin-right: 16px;
    margin-left: 16px;
`;

const MainPanel = styled.div`
    width: 100%;
    height: 50%;
    flex: 1;
    padding: 30px 16px 60px 16px;
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
    background-color: #404040;
    display: flex;
    flex-direction: column;
`;

const ListTitle = styled.div`
    padding-top: 15px;
    padding-bottom: 15px;
    font-size: 25px;
    color: white;
    background: #404040;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

const AddNetworkContainer = styled.div`
    display: flex;
    height: 10%;
    border-bottom-left-radius: 65px;
    border-bottom-right-radius: 65px;
    margin: auto;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

const ListItem = styled.div`
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 50px;
    padding-right: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    color: black;
    height: 60px;
    &:nth-of-type(odd) {
        background: #919191;
    }
    &:nth-of-type(even) {
        background: #818181;
    }
`;

const NetworkList = styled.div`
    height: 80%;
    overflow-y: auto; /* Only vertical scrolling */
    background-color: #656363;
`;

const NetworkInfoContainer = styled.div`
    display: flex;
    align-items: center;
`;

const NetworkActionContainer = styled.div`
    display: flex;
`;

const NetworkName = styled.div<{ strength: number }>`
    margin-left: 15px;
    cursor: context-menu;
    opacity: ${(props) => (props.strength > 0 ? 1 : 0.3)};
`;

const ConnectButton = styled.button<{ strength: number }>`
    background-color: #444444;
    border-width: 2.3px;
    border-color: #000000;
    box-shadow: inset 0px -2px 0px 0px #333333;
    border-radius: 0.25rem;
    width: 120px;
    display: flex;
    cursor: pointer;
    opacity: ${(props) => (props.strength > 0 ? 1 : 0.3)};
    cursor: ${(props) => (props.strength > 0 ? "pointer" : "not-allowed")};
`;

const AddNetworkButton = styled.button`
    background-color: #5b5b5b;
    border-width: 2.3px;
    border-color: #000000;
    box-shadow: inset 0px -2px 0px 0px #333333;
    border-radius: 0.25rem;
    width: 180px;
    display: flex;
    cursor: pointer;
    height: 50%;
`;

const ButtonText = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    color: #ffffff;
    margin: auto;
`;

const DeleteButton = styled.button`
    border-width: 2.3px;
    border-color: #000000;
    box-shadow: inset 0px 0px 0px 0px #333333;
    border-radius: 1rem;
    margin-left: 45px;
    width: 50px;
    background: url(${Delete}) #696969 no-repeat center;
`;

const EditButton = styled.button`
    padding: 12px;
    width: 40px;
    height: 40px;
    background: url(${Edit}) no-repeat center;
`;

export const NetworkPage: React.FC = (prop) => {
    const [userInfo, setUserInfo] = React.useState({
        batterySerial: 789495189561991,
    });

    const [open, setOpen] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [addNetwork, setAddNetwork] = React.useState(false);

    const [type, setType] = React.useState("");
    const [networkName, setNetworkName] = React.useState("");

    const [networks, setNetworks] = useState([
        { name: "TELUS86523-5G", strength: 3 },
        { name: "TELUS42141", strength: 3 },
        { name: "TELUS73425-2.4G", strength: 3 },
        { name: "TELUS16643", strength: 2 },
        { name: "TELUS92353", strength: 2 },
        { name: "TELUS92456-2.4G", strength: 2 },
        { name: "TELUS23116", strength: 1 },
        { name: "TELUS382345-5G", strength: 1 },
        { name: "TELUS382347-5G", strength: 1 },
        { name: "TELUS382342-5G", strength: 0 },
        { name: "TELUS382341-5G", strength: 0 },
    ]);

    const addNewNetwork = (newNetwork: any) => {
        setNetworks((prevNetworks) => [...prevNetworks, newNetwork]);
    };

    const removeNetwork = (name: string) => {
        setNetworks((prevNetworks) =>
            prevNetworks.filter((network) => network.name !== name)
        );
    };

    const sortNetworksByStrength = () => {
        setNetworks((prevNetworks) =>
            [...prevNetworks].sort((a, b) => b.strength - a.strength)
        );
    };

    useEffect(() => {
        sortNetworksByStrength();
    }, [networks]);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
    };

    const handleEditOpen = () => {
        setEditOpen(true);
    };

    const handleAddNetworkClose = () => {
        setAddNetwork(false);
    };

    const handleAddNetworkOpen = () => {
        setAddNetwork(true);
    };

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
            setCurrentTime(`${hours}:${minutes} ${ampm}`);
        };

        updateTime(); // Initial call to set the current time
        const timer = setInterval(updateTime, 1000); // Update every second to handle minute changes

        return () => clearInterval(timer); // Cleanup the interval on component unmount
    }, []);

    return (
        <MainContainer>
            <ComfirmModal
                isOpen={open}
                onClose={handleClose}
                removeNetwork={removeNetwork}
                type={type}
                networkName={networkName}
            ></ComfirmModal>
            <EditModal
                isOpen={editOpen}
                onClose={handleEditClose}
                userInfo={userInfo}
                updateUserInfo={setUserInfo}
            ></EditModal>
            <AddNetworkModal
                isOpen={addNetwork}
                onClose={handleAddNetworkClose}
                addNetwork={addNewNetwork}
                networkList={networks}
            ></AddNetworkModal>

            <LogoContainer>
                <FvtLogo />
            </LogoContainer>
            {/* Header information: service menu button, logo, time date */}
            <HeaderContainer>
                <BatteryInfo>
                    <BatteryInfoTitle>Battery Serial No.</BatteryInfoTitle>
                    <div className="flex">
                        <SerialNum>{userInfo.batterySerial}</SerialNum>
                        <EditButton
                            onClick={() => {
                                handleEditOpen();
                            }}
                        ></EditButton>
                    </div>
                </BatteryInfo>
                <SystemInfo>
                    <Wifi fill="white" strength={2}></Wifi>
                    <TimeInfo>
                        {currentDate} &nbsp; {currentTime}
                    </TimeInfo>
                </SystemInfo>
            </HeaderContainer>
            <MainPanel>
                <NetworkContainer>
                    <ListTitle>Network</ListTitle>
                    <NetworkList>
                        {networks.map((item, index) => (
                            <ListItem>
                                <NetworkInfoContainer>
                                    {item.strength > 0 && (
                                        <Wifi
                                            fill="black"
                                            strength={item.strength}
                                        ></Wifi>
                                    )}
                                    {item.strength === 0 && (
                                        <NoWifi
                                            strength={item.strength}
                                        ></NoWifi>
                                    )}
                                    <NetworkName strength={item.strength}>
                                        {item.name}
                                    </NetworkName>
                                </NetworkInfoContainer>
                                <NetworkActionContainer>
                                    <ConnectButton
                                        onClick={() => {
                                            handleOpen();
                                            setType("Connect to");
                                            setNetworkName(item.name);
                                        }}
                                        strength={item.strength}
                                        disabled={item.strength === 0}
                                    >
                                        <ButtonText>Connect</ButtonText>
                                    </ConnectButton>
                                    <DeleteButton
                                        onClick={() => {
                                            handleOpen();
                                            setType("Remove");
                                            setNetworkName(item.name);
                                        }}
                                    ></DeleteButton>
                                </NetworkActionContainer>
                            </ListItem>
                        ))}
                    </NetworkList>
                    <AddNetworkContainer>
                        <AddNetworkButton
                            onClick={() => {
                                handleAddNetworkOpen();
                            }}
                        >
                            <ButtonText>Add Network</ButtonText>
                        </AddNetworkButton>
                    </AddNetworkContainer>
                </NetworkContainer>
            </MainPanel>
        </MainContainer>
    );
};
