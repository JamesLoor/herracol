import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { theme } from '../theme'

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  z-index: ${theme.positions.modal};
  background-color: ${theme.colors.modalBackground};

  .modal__container {
    /* overflow-y: scroll; */
    /* max-height: 600px; */
    position: relative;
    display: grid;
    width: 90%;
    max-width: 800px;
    cursor: default;
    background-color: ${theme.colors.white};
  }
`

const ModalContainer = document.getElementById('modal')
const Modal = ({ children, closeModal }) => {
  const modalBackground = useRef(null)
  const handleModal = (e) => {
    if(modalBackground.current === e.target) {
      closeModal()
    }
  }
  return ReactDOM.createPortal(
    <ModalStyled ref={modalBackground} onClick={handleModal}>
      <div className="modal__container">
        {children}
      </div>
    </ModalStyled>,
    ModalContainer
  )
}

export default Modal
