import "./Modal.scss";
import { createContext, useContext, useState } from "react";

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

  return (
    <span className="hightlight" onClick={onOpenModal}>
      {trigger}
    </span>
  );
};

const ModalContent = () => {
  const { isOpen, onCloseModal } = useContext(ModalContext);

  return isOpen && <div onClick={onCloseModal}>asdf</div>;
};

const Container = ModalContainer;
const Trigger = ModalTrigger;
const Content = ModalContent;

export { Container, Trigger, Content };
