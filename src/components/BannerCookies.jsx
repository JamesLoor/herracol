import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import Modal from './Modal'
import LogoSvgShort from '../assets/logoHerracolSA.png'
import { useState } from 'react'
import useCookies from '../hooks/useCookies'
import { useEffect } from 'react'

const BannerCookiesStyled = styled.div`
  display: grid;
  padding: 40px;
  gap: 10px;

  .logo {
    width: 200px;
    img {
      width: 100%;
    }
  }

  p {
    font-size: 12px;
    line-height: 1.5em;
  }

  button {
    justify-self: flex-end;
  }
`

const BannerCookies = () => {
  const { consentCookie, acceptConsentCookies } = useCookies()

  if(consentCookie === null) {
    return (
      <Modal>
        <BannerCookiesStyled>
          <figure className="logo">
            <img src={LogoSvgShort} alt="Logo Herracol S.A" />
          </figure>
          <h3>Nos preocupamos por tu privacidad</h3>
          <p>Utilizamos cookies e identificadores propios y de terceros con tu consentimiento y/o nuestro interés legítimo, con el propósito de almacenar o acceder a información en tu dispositivo, recabar datos personales sobre la audiencia para desarrollar y mejorar productos así como mostrar y medir anuncios propios y/o de terceros y/o contenido personalizados basándonos en tu navegación (por ejemplo páginas visitadas).</p>
          <p>Algunos de estos propósitos incluyen la geolocalización precisa, el análisis de las características del dispositivo para distinguir los usuarios, el cotejo y combinación de datos off line y el vínculo de diferentes dispositivos.</p>
          <p>En cualquier caso utilizaremos cookies para garantizar la seguridad, evitar fraudes, depurar errores y servir técnicamente anuncios o contenidos.</p>
          <Button onClick={acceptConsentCookies}>Aceptar y cerrar</Button>
        </BannerCookiesStyled>
      </Modal>
    )
  }

  return null
}

export default BannerCookies
