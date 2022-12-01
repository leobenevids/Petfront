import React from "react";
import { Background, Container } from "./ConfirmModalStyles";

function ConfirmModal({ isOpen, handleDelete, message }) {
  return (
    <Background onClick={() => isOpen(false)}>
      <Container onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2>
        <div>
          <button onClick={() => handleDelete()}>Sim</button>
          <button onClick={() => isOpen(false)}>Retornar</button>
        </div>
      </Container>
    </Background>
  );
}

export default ConfirmModal;
