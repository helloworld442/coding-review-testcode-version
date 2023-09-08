import { createContext, useContext, useState } from "react";
import { styled } from "styled-components";

const ModalContext = createContext(null);

const ModalContainer = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpenModal = () => setIsOpen(true);

  const onCloseModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, onOpenModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const ModalTrigger = ({ trigger }) => {
  const { onOpenModal } = useContext(ModalContext);

  return <StModalTrigger onClick={onOpenModal}>{trigger}</StModalTrigger>;
};

const ModalOverLay = () => {
  const { isOpen, onCloseModal } = useContext(ModalContext);

  return isOpen && <StModalOverLay onClick={onCloseModal} />;
};

const ModalContent = ({ children }) => {
  const { isOpen } = useContext(ModalContext);

  return isOpen && <StModalContent>{children}</StModalContent>;
};

const ModalClose = ({ trigger }) => {
  const { onCloseModal } = useContext(ModalContext);

  return <StModalClose onClick={onCloseModal}>{trigger}</StModalClose>;
};

const StModalTrigger = styled.div`
  display: inline-block;
`;

const StModalOverLay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #888;
  opacity: 0.8;
`;

const StModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
`;

const StModalClose = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: inline-block;
  svg {
    width: 24px;
    height: 24px;
    fill: #333;
  }
`;

const Container = ModalContainer;
const Trigger = ModalTrigger;
const OverLay = ModalOverLay;
const Content = ModalContent;
const Close = ModalClose;

export { Container, Trigger, OverLay, Content, Close };
