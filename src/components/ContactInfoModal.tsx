import React from "react";
import styled from "styled-components";
interface ModalProps {
    isOpen: any;
    onClose: any;
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
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
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

const InfoTitle = styled.span`
    text-wrap: nowrap;
    font-weight: bold;
    color: black;
`;
const InfoText = styled.span`
    text-wrap: nowrap;
    color: #494949;
    margin-bottom: 25px;
`;

const SecondaryInfoText = styled.span`
    text-wrap: nowrap;
    color: #494949;
    margin-bottom: 5px;
`;
const ContactInfoModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <ModalBackground>
            <ModalContainer>
                <ModalContent>
                    <ModalText>
                        <InfoTitle>PHONE</InfoTitle>
                        <InfoText>+1 (604) 465-0529</InfoText>
                        <InfoTitle>E-MAIL</InfoTitle>
                        <InfoText>fvt-office@epiroc.com</InfoText>
                        <InfoTitle>HOURS</InfoTitle>
                        <SecondaryInfoText>Monday to Friday</SecondaryInfoText>
                        <InfoText>9AM - 4PM (PST)</InfoText>
                    </ModalText>
                    <ModalFooter>
                        <ModalFooterButtons onClick={onClose}>
                            Ok
                        </ModalFooterButtons>
                    </ModalFooter>
                </ModalContent>
            </ModalContainer>
        </ModalBackground>
    );
};

export default ContactInfoModal;
