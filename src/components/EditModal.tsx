import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "./AuthContext";
import { TextInput } from "../style/InputStyles";

interface ModalProps {
    isOpen: any;
    onClose: any;
    userInfo: any;
    updateUserInfo: any;
}

const ModalBackground = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    z-index: 5;
`;

const ModalContainer = styled.div`
    background: rgb(139 139 139);
    height: 90%;
    width: 35%;
    margin: auto;
    padding: 15px 15px 50px;
    border: 2px solid rgb(0 0 0);
    border-radius: 10px;
    display: flex;
`;

const ModalText = styled.div`
    margin-bottom: 10px;
    font-size: 30px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const InputContainer = styled.div`
    margin-bottom: 15px;
    width: 80%;

    &#w-60 {
        width: 60%;
    }

    &#w-35 {
        width: 35%;
    }
`;

const InputPanel = styled.div`
    text-align: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
`;

const InputGroup = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
`;

const ModalFooter = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
`;

const ModalFooterButtons = styled.button<{ primary?: boolean }>`
    background-color: ${({ primary }) => (primary ? "#797979" : "#949393")};
    border-width: 2.3px;
    border-color: #000000;
    box-shadow: inset 0px -2px 0px 0px #333333;
    border-radius: 0.25rem;
    width: 150px;
    cursor: pointer;
    font-size: 28px;
`;
const InputLabel = styled.label`
    font-size: 19px;
    font-weight: bold;
`;

const BoldText = styled.span`
    font-weight: bold;
`;

const Divider = styled.div`
    width: 79%;
    height: 3px;
    background-color: #4b4b4b;
    margin-bottom: 25px;
`;
const EditModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    userInfo,
    updateUserInfo,
}) => {
    let [mqttConfig, setMqttConfig] = useState({
        batterySerial: userInfo.batterySerial,
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setMqttConfig((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleClose = () => {
        setMqttConfig(userInfo);
        onClose();
    };

    const handleUpdate = () => {
        updateUserInfo(mqttConfig);
        onClose();
    };

    const { auth } = useAuth();

    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalContent>
                    <InputPanel>
                        <ModalText>
                            <BoldText>Battery</BoldText>
                        </ModalText>
                        <InputContainer>
                            <InputLabel>Battery serial Number</InputLabel>
                            <TextInput
                                type="text"
                                id="battery-serial"
                                name="batterySerial"
                                onChange={handleChange}
                                placeholder={
                                    auth.role === "admin" ? "Ex.VPY-1111" : "-"
                                }
                                value={mqttConfig.batterySerial}
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Type</InputLabel>
                            <TextInput
                                type="text"
                                id="type"
                                name="type"
                                onChange={handleChange}
                                placeholder={
                                    auth.role === "admin" ? "Ex.B4ST" : "-"
                                }
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                        <Divider></Divider>
                        <ModalText>
                            <BoldText>MQTT configuration</BoldText>
                        </ModalText>
                        <InputGroup>
                            <InputContainer id="w-60">
                                <InputLabel>Endpoint</InputLabel>
                                <TextInput
                                    type="text"
                                    id="endpoint"
                                    placeholder={
                                        auth.role === "admin"
                                            ? "Ex.127.0.0.1"
                                            : "-"
                                    }
                                    autoComplete="off"
                                    disabled={auth.role === "user"}
                                ></TextInput>
                            </InputContainer>
                            <InputContainer id="w-35">
                                <InputLabel>Port</InputLabel>
                                <TextInput
                                    type="text"
                                    id="port"
                                    placeholder={
                                        auth.role === "admin" ? "Ex.1883" : "-"
                                    }
                                    autoComplete="off"
                                    disabled={auth.role === "user"}
                                ></TextInput>
                            </InputContainer>
                        </InputGroup>

                        <InputContainer>
                            <InputLabel>Client ID</InputLabel>
                            <TextInput
                                type="text"
                                id="clientId"
                                placeholder={
                                    auth.role === "admin"
                                        ? "Ex.sparkplugb_docker_app"
                                        : "-"
                                }
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Username</InputLabel>
                            <TextInput
                                type="text"
                                id="userName"
                                placeholder={
                                    auth.role === "admin" ? "Ex.EESVAN" : "-"
                                }
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Password</InputLabel>
                            <TextInput
                                type="text"
                                id="password"
                                placeholder={
                                    auth.role === "admin" ? "Ex.Ees12345" : "-"
                                }
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Publish Period</InputLabel>
                            <TextInput
                                type="text"
                                id="period"
                                placeholder={
                                    auth.role === "admin" ? "Ex.1500" : "-"
                                }
                                autoComplete="off"
                                disabled={auth.role === "user"}
                            ></TextInput>
                        </InputContainer>
                    </InputPanel>

                    <ModalFooter>
                        <ModalFooterButtons onClick={handleClose}>
                            Cancel
                        </ModalFooterButtons>
                        {auth.role === "admin" && (
                            <ModalFooterButtons onClick={handleUpdate} primary>
                                Update
                            </ModalFooterButtons>
                        )}
                    </ModalFooter>
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    );
};

export default EditModal;
