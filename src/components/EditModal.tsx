import React from "react";
import styled from "styled-components";
interface ModalProps {
    isOpen: any;
    onClose: any;
    type?: string;
    networkName?: string;
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
    padding: 35px 15px 50px;
    border: 2px solid rgb(0; 0; 0);
    borderradius: 10px;
    display: flex;
    justifycontent: center;
`;

const ModalText = styled.div`
    font-size: 30px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
`;

const InputContainer = styled.div`
    margin-bottom: 45px;
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

const BoldText = styled.span`
    font-weight: bold;
`;

const Divider = styled.div`
    width: 100%;
    height: 7px;
    background-color: #4b4b4b;
    margin-bottom: 25px;
`;
const EditModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    type,
    networkName,
}) => {
    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContainer
            >
                <ModalContent>
                    <ModalText>
                        <BoldText>MQTT configuration</BoldText>
                    </ModalText>
                    <InputPanel>
                        <InputContainer>
                            <label htmlFor="input" className="Input-label">
                                Battery serial Number
                            </label>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                            ></input>
                        </InputContainer>
                        <Divider></Divider>
                        <InputGroup>
                            <InputContainer id="w-60">
                                <label htmlFor="input" className="Input-label">
                                    Endpoint
                                </label>
                                <input
                                    type="text"
                                    id="input"
                                    className="Input-text"
                                    placeholder="xxxxxxxxxxxxxxxxxxx"
                                ></input>
                            </InputContainer>
                            <InputContainer id="w-35">
                                <label htmlFor="input" className="Input-label">
                                    Port
                                </label>
                                <input
                                    type="text"
                                    id="input"
                                    className="Input-text"
                                    placeholder="8080"
                                ></input>
                            </InputContainer>
                        </InputGroup>

                        <InputContainer>
                            <label htmlFor="input" className="Input-label">
                                Client ID
                            </label>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="input" className="Input-label">
                                Username
                            </label>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                            ></input>
                        </InputContainer>
                        <InputContainer>
                            <label htmlFor="input" className="Input-label">
                                Password
                            </label>
                            <input
                                type="text"
                                id="input"
                                className="Input-text"
                                placeholder="xxxxxxxxxxxxxxxxxxx"
                            ></input>
                        </InputContainer>
                    </InputPanel>

                    <ModalFooter>
                        <ModalFooterButtons onClick={onClose}>
                            Cancel
                        </ModalFooterButtons>
                        <ModalFooterButtons>Update</ModalFooterButtons>
                    </ModalFooter>
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    );
};

export default EditModal;
