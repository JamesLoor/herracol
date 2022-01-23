import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'
import Footer from '../components/Footer'
import AddressMap from '../components/AddressMap'

const ContactStyled = styled.div`
  .contact__container {
    display: grid;
    gap: 25px;
    padding-bottom: 50px;
  }

  .contact__info__grid {
    display: grid;
    grid-auto-flow: row;
    gap: 25px;
  }

  .contact__info {
    display: grid;
    grid-template-columns: min-content 1fr;
    align-items: center;
    gap: 20px;
    color: ${theme.colors.black};
  }

  @media (min-width: 1024px) {
    .contact__container {
      grid-template-areas:
        "form map"
        "info map";
    }

    .contact__form {
      grid-area: form;
    }

    .contact__info__grid {
      grid-area: info;
    }

    .contact__map {
      grid-area: map;
    }
  }
`

const Contact = () => {
  return (
    <ContactStyled>
      <Wrapper>
        <div className="contact__container">
          <ContactForm className="contact__form"/>
          <div className="contact__info__grid">
            <div className="contact__info">
              <Icon icon="whatsapp" width="30" height="30" color={theme.colors.black} />
              <span>+593 98 324 5586</span>
            </div>
            <div className="contact__info">
              <Icon icon="instagram" width="30" height="30" color={theme.colors.black} />
              <span>@herracol_sa</span>
            </div>
            <div className="contact__info">
              <Icon icon="phone" width="30" height="30" color={theme.colors.black} />
              <span>+593 4 2103460</span>
            </div>
            <div className="contact__info">
              <Icon icon="location" width="30" height="30" color={theme.colors.black} />
              <span>Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2 - Guayaquil - Ecuador</span>
            </div>
            <div className="contact__info">
              <Icon icon="card" width="30" height="30" color={theme.colors.black} />
              <span>info@herracol.net - ventas@herracol.net - importaciones@herracol.net</span>
            </div>
          </div>
          <AddressMap className="contact__map"/>
        </div>
      </Wrapper>
      <Footer />
    </ContactStyled>
  )
}

export default Contact
