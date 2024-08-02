import React, { useState } from "react";
import styled from "styled-components";
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

const ModalFooterButtons = styled.div`
    background-color: #797979;
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
                            <input
                                type="text"
                                id="input"
                                name="batterySerial"
                                className="Input-text"
                                onChange={handleChange}
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                value={mqttConfig.batterySerial}
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Type</InputLabel>
                            <input
                                type="text"
                                id="input"
                                name="type"
                                className="Input-text"
                                onChange={handleChange}
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                        <Divider></Divider>
                        <ModalText>
                            <BoldText>MQTT configuration</BoldText>
                        </ModalText>
                        <InputGroup>
                            <InputContainer id="w-60">
                                <InputLabel>Endpoint</InputLabel>
                                <input
                                    type="text"
                                    id="input"
                                    className="Input-text"
                                    placeholder="xxxxxxxxxxxxxxxxxxx"
                                    autoComplete="off"
                                ></input>
                            </InputContainer>
                            <InputContainer id="w-35">
                                <InputLabel>Port</InputLabel>
                                <input
                                    type="text"
                                    id="input"
                                    className="Input-text"
                                    placeholder="8080"
                                    autoComplete="off"
                                ></input>
                            </InputContainer>
                        </InputGroup>

                        <InputContainer>
                            <InputLabel>Client ID</InputLabel>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Username</InputLabel>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Password</InputLabel>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <InputLabel>Publish Period</InputLabel>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                                autoComplete="off"
                            ></input>
                        </InputContainer>
                    </InputPanel>

                    <ModalFooter>
                        <ModalFooterButtons onClick={handleClose}>
                            Cancel
                        </ModalFooterButtons>
                        <ModalFooterButtons onClick={handleUpdate}>
                            Update
                        </ModalFooterButtons>
                    </ModalFooter>
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    );
};

export default EditModal;
