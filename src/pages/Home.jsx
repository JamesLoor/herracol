import React from 'react'
import styled from 'styled-components'
import { Wrapper } from '../globalStyles'
import Logo from '../assets/LogoGrande.png'
import Button from '../components/Button'
import Link from '../components/Link'

const HomeStyled = styled.div`
  .hero__container {
    min-height: calc(100vh - 100px);
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
    grid-gap: 20px;
  }

  .hero__container h1 {
    text-align: left;
  }

  .hero__image img {
    width: 100%;
  }

  .hero__content {
    display: grid;
    grid-gap: 10px;
  }

  .hero__content button {
    width: min-content;
  }

  .hero__content h1 {
    font-size: 32px;
  }

  @media (min-width: 768px) {
    .hero__content h1 {
     font-size: 66px;
    }

    .hero__content p {
      font-size: 18px;
    }

    .hero__container {
      grid-template-columns: 1.5fr 1fr;
    }
  }
`

const Home = () => {
  const handleButton = () => {

  }

  return (
    <HomeStyled>
      <Wrapper>
        <div className="hero__container">
          <div className="hero__content">
            <h1>Quienes Somos</h1>
            <p>Herracol S.A. es una empresa familiar fundada en Guayaquil – Ecuador el 13 de noviembre del 2000, dedicada a la importación y distribución de herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional. En nuestro portafolio de productos contamos con una línea de negocios y punto de venta de aluminio, vidrio y sus accesorios.</p>
            <Button>
              <Link to="/contacto">
                Contactar
              </Link>
            </Button>
          </div>

          <figure className="hero__image">
            <img src={Logo} alt="Logo Circular Herracol S.A." />
          </figure>

        </div>
      </Wrapper>
    </HomeStyled>
  )
}

export default Home
