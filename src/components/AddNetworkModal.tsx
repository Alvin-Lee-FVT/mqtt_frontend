import React, { useState } from "react";
import styled from "styled-components";
import { TextInput } from '../style/InputStyles';

interface ModalProps {
    isOpen: any;
    onClose: any;
    addNetwork: any;
    networkList: any;
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
    height: 50%;
    width: 35%;
    margin: auto;
    padding: 35px 15px 50px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
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

const ModalFooter = styled.div`
    display: flex;
    justify-content: space-around;
`;

const ModalFooterButtons = styled.button`
    background-color: #797979;
    border-width: 2.3px;
    border-color: #000000;
    box-shadow: inset 0px -2px 0px 0px #333333;
    border-radius: 0.25rem;
    width: 150px;
    cursor: pointer;
    font-size: 28px;
    &:disabled {
        cursor: not-allowed;
        opacity: 0.5;
    }
`;

const InputLabel = styled.label`
    font-size: 19px;
    font-weight: bold;
`;

const WarnLabel = styled.p`
    color: #910202;
`;

const BoldText = styled.span`
    font-weight: bold;
`;

const AddNetworkModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    addNetwork,
    networkList,
}) => {
    const [ssid, setSsid] = useState("");
    const [password, setPassword] = useState("");

    // Initial loading state
    const [isloading, setIsloading] = useState(false);

    // Initially disabled the button
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [showWarnMessage, setShowWarnMessage] = useState(false);

    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleSsidChange = (event: any) => {
        setShowWarnMessage(false);
        setSsid(event.target.value.replace(/\s/g, ""));
        setIsButtonDisabled(event.target.value === "" || password === "");
    };

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value.replace(/\s/g, ""));
        setIsButtonDisabled(ssid === "" || event.target.value === "");
    };

    if (!isOpen) return null;

    const handleAdd = () => {
        setIsloading(true);

        const duplicateSsid = networkList.some(
            (ele: { name: any }) => ele.name === ssid
        );
        if (!duplicateSsid) {
            setTimeout(() => {
                addNetwork({ name: ssid, strength: 3 });
                setSsid("");
                setPassword("");
                setIsButtonDisabled(true);
                onClose();
                setIsloading(false);
            }, 3000);
        } else {
            setIsloading(false);
            setShowWarnMessage(true);
        }
    };

    const handleClose = () => {
        setShowWarnMessage(false);
        setIsButtonDisabled(true);
        setSsid("");
        setPassword("");
        onClose();
    };

    return (
        <ModalBackground>
            <ModalContainer>
                {!isloading && (
                    <ModalContent>
                        <ModalText>
                            <BoldText>Add Network</BoldText>
                        </ModalText>
                        <InputPanel>
                            <InputContainer>
                                <InputLabel>SSID</InputLabel>
                                <TextInput
                                    type="text"
                                    id="ssid"
                                    value={ssid}
                                    onChange={handleSsidChange}
                                    autoComplete="off"
                                    placeholder="Network SSID"
                                ></TextInput>
                                {showWarnMessage && (
                                    <WarnLabel>
                                        -- (Network SSID already exist) --
                                    </WarnLabel>
                                )}
                            </InputContainer>
                            <InputContainer>
                                <InputLabel>Password</InputLabel>
                                <TextInput
                                    type="text"
                                    id="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    autoComplete="off"
                                    placeholder="Password"
                                ></TextInput>
                            </InputContainer>
                        </InputPanel>

                        <ModalFooter>
                            <ModalFooterButtons onClick={handleClose}>
                                Cancel
                            </ModalFooterButtons>
                            <ModalFooterButtons
                                onClick={handleAdd}
                                disabled={isButtonDisabled}
                            >
                                Add
                            </ModalFooterButtons>
                        </ModalFooter>
                    </ModalContent>
                )}
                {isloading && <div className="connecting"></div>}
            </ModalContainer>
        </ModalBackground>
    );
};

export default AddNetworkModal;
