import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const AddressMapStyled = styled.div`
  .map {
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.secundaryLight};
  }
`

const AddressMap = ({ className }) => {
  return (
    <AddressMapStyled className={className}>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.775028602812!2d-79.93826776934559!3d-2.0979668505320705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d0d416a07ba3f%3A0x343b7937a49a3d51!2sParque%20california%202%20bodegas!5e0!3m2!1ses!2sec!4v1639832796028!5m2!1ses!2sec"
        className="map"
        allowFullScreen=""
        loading="lazy">
      </iframe>
    </AddressMapStyled>
  )
}

export default AddressMap
