import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import Icon from './Icon'

const ButtonWhatsAppStyled = styled.button`
  display: grid;
  grid-template-columns: min-content max-content;
  justify-content: center;
  align-items: center;
  line-height: 25px;
  grid-gap: 10px;
  width: min-content;
  outline: none;
  border: none;
  cursor: pointer;
  color: ${theme.colors.white};
  font-weight: 500;
  min-width: 240px;
  text-align: left;
  border-radius: 20px;
  padding: 10.5px 21px;
  background-color: ${theme.colors.whatsapp};

  svg {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
const ButtonWhatsApp = ({ message, className }) => {
  const phone = '593983245586'
  const url = `https://wa.me/${phone}?text=${encodeURI(message)}`
  const handleClick = () => {
    window.open(url, '_blank');
  }
  return (
    <ButtonWhatsAppStyled className={className} type="button" onClick={handleClick}>
      <Icon icon="whatsapp" width="18" height="18" color="white"/> Reservar por WhatsApp
    </ButtonWhatsAppStyled>
  )
}

export default ButtonWhatsApp