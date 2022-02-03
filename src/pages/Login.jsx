import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from '../components/Button'
import { theme } from '../theme'

import Input from '../components/Input'

const LoginStyled = styled.div`
  /*  */
`

const Login = () => {
  const initialValues = { email: '', password: '' }
  const validationSchema = Yup.object({
    email: Yup.string().email('Correo Invalido').required('Obligatorio'),
    password: Yup.string().required('Obligatorio')
  })
  const onSubmit = () => {

  }

  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <LoginStyled>
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit} className="form__container">
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
      </form>
    </LoginStyled>
  )
}

export default Login
