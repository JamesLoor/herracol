import React from 'react'
import styled from 'styled-components'
import ContactForm from '../components/ContactForm'
import Icon from '../components/Icon'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'
import Footer from '../components/Footer'
import AddressMap from '../components/AddressMap'

const ContactStyled = styled.div`
  .contact__map {
    height: 200px;
    margin-top: -21px;
  }

  .contact__container {
    display: grid;
    gap: 40px;
    padding-bottom: 50px;
    margin-top: 40px;
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

  @media (min-width: 768px) {
    .contact__container {
      margin: 0 0 50px;
      gap: 25px;
    }

    .contact__info__grid {
      width: calc(100% - 400px);
    }
  }

  @media (min-width: 1024px) {
    .contact__map {
      height: 300px;
    }

    .contact__container {
      margin: 0 0 5%;
      gap: 60px;
    }

    .info__whatsapp {
      grid-area: whatsapp;
    }

    .info__instagram {
      grid-area: instagram;
    }

    .info__phone {
      grid-area: phone;
    }

    .info__location {
      grid-area: location;
    }
    
    .info__card {
      grid-area: card;
    }

    .contact__info__grid {
      grid-template-areas:
        "whatsapp location"
        "instagram card"
        "phone .";
      grid-template-columns: max-content 1fr;
      gap: 25px 60px;
    }
  }
`

const Contact = () => {
  return (
    <ContactStyled>
      <AddressMap className="contact__map"/>
      <Wrapper>
        <div className="contact__container">
          <ContactForm className="contact__form"/>
          <div className="contact__info__grid">
            <div className="contact__info info__whatsapp">
              <Icon icon="whatsapp" width="30" height="30" color={theme.colors.black} />
              <span>+593 98 324 5586</span>
            </div>
            <div className="contact__info info__instagram">
              <Icon icon="instagram" width="30" height="30" color={theme.colors.black} />
              <span>@herracol_sa</span>
            </div>
            <div className="contact__info info__phone">
              <Icon icon="phone" width="30" height="30" stroke={true} color={theme.colors.black} />
              <span>+593 4 2103460</span>
            </div>
            <div className="contact__info info__location">
              <Icon icon="location" width="30" height="30" color={theme.colors.black} />
              <span>Via a Daule km 11.5 Bodegas C7 y C41 Parque California 2 - Guayaquil - Ecuador</span>
            </div>
            <div className="contact__info info__card">
              <Icon icon="card" width="30" height="30" color={theme.colors.black} />
              <span>info@herracol.net - ventas@herracol.net - importaciones@herracol.net</span>
            </div>
          </div>
        </div>
      </Wrapper>
      <Footer />
    </ContactStyled>
  )
}

export default Contact
