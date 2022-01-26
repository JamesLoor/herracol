import React from 'react'
import styled from 'styled-components'
import { Wrapper, TitleH2 } from '../globalStyles'
import Logo from '../assets/LogoGrande.png'
import Button from '../components/Button'
import Link from '../components/Link'
import Value from '../components/Value'
import Testimonial from '../components/Testimonial'
import logoAbro from '../assets/brands/logoAbro.png'
import logoColima from '../assets/brands/logoColima.png'
import logoGermany from '../assets/brands/logoGermany.png'
import logoBolt from '../assets/brands/logoBolt.png'
import logoGavilan from '../assets/brands/logoGavilan.png'
import logoIncolma from '../assets/brands/logoIncolma.png'
import logoTekbond from '../assets/brands/logoTEKBOND.png'
import logoCaribe from '../assets/brands/logoCaribe.png'
import logoSaintGobain from '../assets/brands/logoSaintGobain.png'
import pruebaHistoria from '../assets/pruebaHistoria.png'

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

  .hero__text {
    font-size: 18px;
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
    font-size: 30px;
  }

  @media (min-width: 768px) {
    .hero__container {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  @media (min-width: 1024px) {
    .hero__content h1 {
     font-size: 45px;
    }

    .hero__content p {
      font-size: 20px;
    }
  }

  .values__container {
    padding: 50px 0;
  }

  .values_title {
    text-align: center;
  }

  .values__container_text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .values__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

  @media (min-width: 768px) {
    .values__content {
      grid-template-columns: 1fr 1fr;
    }

    .values__container_text {
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .values__container_text {
      font-size: 20px;
      width: 70%;
      margin: 0 auto 40px auto;
    }
  }

  .brands__container {
    padding-bottom: 50px;
  }

  .brands__title {
    text-align: center;
  }

  .brands__text{
    font-size: 18px;
    margin-bottom: 20px;
  }

  .brands__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  .brands__content img {
    width: 100%;
  }

  @media (min-width: 768px) {
    .brands__content {
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
    }
    .brands__text {
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .brands__container {
      padding: 50px 0;
   }

    .brands__text {
      font-size: 20px;
      width: 70%;
      margin: 0 auto 40px auto;
    }
  }

  .history__container {
    display: grid;
    grid-template-areas: 
      "content" 
      "image";
    gap: 10px;
    padding-bottom: 50px;
  }

  .history__text {
    font-size: 18px;
  }

  .history__figure {
    grid-area: image;
  }

  .history__figure img {
    width: 100%;
  }

  .history__content {
    grid-area: content;
  }

  @media (min-width: 768px) {
    .history__container {
      grid-template-areas: "image content";
      gap: 20px;
    }

    .history__figure img {
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  @media (min-width: 1024px) {
    .history__container {
      gap: 60px;
      padding: 50px 0;
    }

    .history__text {
      font-size: 20px;
    }
  }

  .testimonials__title {
    text-align: center;
  }

  .testimonials__text {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .testimonials__content {
    display: grid;
    gap: 15px;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .testimonials__content {
      grid-template-columns: repeat(3, 1fr);
    }

    .testimonials__text {
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    .testimonials__container {
      padding: 50px;
    }

    .testimonials__content{
      gap: 70px;
    }

    .testimonials__text {
      font-size: 20px;
      width: 70%;
      margin: 0 auto 40px auto;
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
            <p className='hero__text'>Herracol S.A. es una empresa familiar fundada en Guayaquil – Ecuador el 13 de noviembre del 2000, dedicada a la importación y distribución de herramientas para la construcción, agricultura, jardinería e industria con cobertura en todo el territorio nacional. En nuestro portafolio de productos contamos con una línea de negocios y punto de venta de aluminio, vidrio y sus accesorios.</p>
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

        <div className="values__container">
            <TitleH2 className="values_title">Nuestros Valores</TitleH2>
            <p className="values__container_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            <div className="values__content">
              <Value icon="" title="Valor1" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
              <Value icon="" title="Valor2" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
              <Value icon="" title="Valor3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
              <Value icon="" title="Valor4" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
            </div>
        </div>

        <div className="brands__container">
            <TitleH2 className="brands__title">Nuestras Marcas</TitleH2>
            <p className="brands__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

            <figure className="brands__content">
              <img src={logoAbro} alt="Logo Abro" />
              <img src={logoColima} alt="Logo Colima" />
              <img src={logoGermany} alt="Logo Germany" />
              <img src={logoBolt} alt="Logo Bolt" />
              <img src={logoGavilan} alt="Logo Gavilan" />
              <img src={logoIncolma} alt="Logo Incolma" />
              <img src={logoTekbond} alt="Logo Tekbond" />
              <img src={logoCaribe} alt="Logo Caribe" />
              <img src={logoSaintGobain} alt="Logo Saint Gobain" />
            </figure>
        </div>

        <div className="history__container">
          <figure className="history__figure">
            <img src={pruebaHistoria} alt=""/>
          </figure>

          <div className="history__content">
            <TitleH2>Historia</TitleH2>
            <p className='history__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <br/>
            <p className='history__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <br/>
            <p className='history__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          </div>
        </div>

        <div className="testimonials__container">
          <TitleH2 className="testimonials__title">Testimonios</TitleH2>
          <p className="testimonials__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

          <div className="testimonials__content">
            <Testimonial image={logoAbro} name="John Doe" type="Cliente" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
            <Testimonial image={logoAbro} name="John Doe" type="Cliente" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
            <Testimonial image={logoAbro} name="John Doe" type="Cliente" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."/>
          </div>
        </div>
      </Wrapper>
    </HomeStyled>
  )
}

export default Home
