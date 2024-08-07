import React from "react";
import styled from "styled-components";
interface ModalProps {
    isOpen: any;
    onClose: any;
    removeNetwork: any;
    disconnectNetwork: any;
    connectNetwork: any;
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
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 25px;
    width: 50%;
    margin: auto;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    justify-content: center;
`;

const ModalText = styled.div`
    font-size: 30px;
    margin-bottom: 55px;
`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
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
    width: 250px;
    cursor: pointer;
    font-size: 28px;
`;

const BoldText = styled.span`
    text-wrap: nowrap;
    font-weight: bold;
`;
const ComfirmModal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    removeNetwork,
    type,
    networkName,
    disconnectNetwork,
    connectNetwork,
}) => {
    if (!isOpen) return null;

    const handleAction = () => {
        if (type === "Remove") {
            removeNetwork(networkName);
        } else if (type === "Connect to") {
            connectNetwork(networkName);
        } else if (type === "Disconnect") {
            disconnectNetwork();
        }
        onClose();
    };
    return (
        <ModalBackground>
            <ModalContainer>
                <ModalContent>
                    <ModalText>
                        Do you want to <BoldText>{type}</BoldText> the network
                        <BoldText> {networkName}</BoldText>?
                    </ModalText>
                    <ModalFooter>
                        <ModalFooterButtons onClick={onClose}>
                            No
                        </ModalFooterButtons>
                        <ModalFooterButtons onClick={handleAction}>
                            Yes
                        </ModalFooterButtons>
                    </ModalFooter>
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    );
};

export default ComfirmModal;
