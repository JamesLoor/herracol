import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import Button from '../components/Button'
import useAuth from '../hooks/useAuth'
import { useFormik } from 'formik'
import Input from '../components/Input'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Wrapper } from '../globalStyles'
import { theme } from '../theme'
import LogoSvgShort from '../assets/Group436.svg'
import background from '../assets/background.png'

const LoginStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background:
    radial-gradient(
      73.8% 77.44% at 26.2% 68.35%,
      rgba(7, 51, 151, 0.8) 0%,
      rgba(24, 40, 72, 0.8) 100%
    ), url(${background});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  .login__container {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-items: center;
  }

  .information {
    display: none;
    grid-gap: 20px;
  }

  .information h1 {
    font-size: 50px;
    color: ${theme.colors.accent};
  }

  .line {
    display: block;
    width: 80px;
    height: 2px;
    background-color: ${theme.colors.accent};
  }

  .information p {
    font-size: 18px;
    color: ${theme.colors.white};
  }

  .information__button {
    width: min-content;
  }

  .form {
    width: 100%;
    max-width: 450px;
    justify-self: center;
    padding: 50px 30px;
    background-color: #00000033;
  }

  .form__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 30px;
  }

  .form__error {
    margin-bottom: 10px;
    color: ${theme.colors.error};
  }

  .form__logo img {
    width: 80%;
  }

  .form__container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .input__email, .input__password {
    width: 100%;
    color: ${theme.colors.white};
    input {
      background-color: #FFFFFF33;
      border: none;
      color: ${theme.colors.white};
    }
  }

  .form__button {
    width: 100%;
  }

  @media (min-width: 1024px) {
    .login__container {
      grid-template-columns: 1fr 450px;
      grid-gap: 60px;
    }

    .information {
      display: grid;
    }
  }
`

const Login = () => {
  const navigate = useNavigate()
  const { user, login, error } = useAuth()
  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().email('Correo Invalido').required('Obligatorio'),
    password: Yup.string().required('Obligatorio')
  })
  const onSubmit = async (values, actions) => {
    login(values)
    actions.resetForm()
  }

  useEffect(() => {
    if(user) {
      navigate('/admin')
    }
  }, [navigate, user])

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <LoginStyled>
      <Wrapper>
        <div className="login__container">
          <div className="information">
            <h1>Administración <span className="line"></span></h1>
            <p>Herracol S.A. Administración.</p>
            <p>Solo personal autorizado tendra acceso privilegiado a la parte administrativa del sitio web, Solo puedes administrar este sitio web si tienes tus credenciales de Herracol.net</p>
            <p>Desarrollado por DHSoft</p>

            <Button className="information__button" onClick={() => navigate('/')}>Volver</Button>
          </div>

          <form onSubmit={formik.handleSubmit} className="form">
            <figure className="form__logo">
              <img src={LogoSvgShort} alt="Logo Herracol" />
            </figure>
            {error.message !== '' &&
              <p className="form__error">{error.message}</p>
            }
            <div className="form__container">
              <Input
                label="Correo electrónico"
                id="email"
                name="email"
                type="email"
                className="input__email"
                onChange={formik.handleChange}
                value={formik.values.email}
                error={formik.errors.email}
                touched={formik.touched.email}
              />
              <Input
                label="Contraseña"
                id="password"
                name="password"
                type="password"
                className="input__password"
                onChange={formik.handleChange}
                value={formik.values.password}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <Button className="form__button" type="submit">Iniciar Sesión</Button>
            </div>
          </form>
        </div>
      </Wrapper>
    </LoginStyled>
  )
}

export default Login
