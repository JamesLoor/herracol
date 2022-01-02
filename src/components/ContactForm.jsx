import React from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'
import { theme } from '../theme'

const ContactFormStyled = styled.div`
  .form__title {
    font-size: 36px;
    font-weight: 1000;
    color: ${theme.colors.black};
    margin-bottom: 20px;
  }

  .form__container {
    display: grid;
    grid-template-areas:
      "name"
      "email"
      "message"
      "button";
    gap: 8px;
  }

  .input__name {
    grid-area: name;
  }

  .input__email {
    grid-area: email;
  }

  .input__message {
    grid-area: message;
  }

  .form__button {
    margin-top: 12px;
    width: 150px;
    grid-area: button;
  }

  @media (min-width: 768px) {
    .form__container {
      display: grid;
      grid-template-columns: .5fr 1fr;
      grid-template-areas:
        "name email"
        "message message"
        "button button";
      gap: 8px;
    }
  }
`

const ContactForm = ({ className }) => {
  const initialValues = { name: '', email: '', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email('Correo Invalido'),
    message: Yup.string().required('Obligatorio')
  })
  const onSubmit = (data, { resetForm }) => {
    console.log(data)
    resetForm()

  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <ContactFormStyled className={className}>
       <h2 className="form__title">Dejanos un mensaje</h2>

       <form onSubmit={formik.handleSubmit} className="form__container">
          <Input
            label="Nombre"
            id="name"
            name="name"
            type="text"
            className="input__name"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            touched={formik.touched.name}
          />
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
          <Textarea
            rows="5"
            label="Mensaje"
            id="message"
            name="message"
            type="text"
            className="input__message"
            onChange={formik.handleChange}
            value={formik.values.message}
            error={formik.errors.message}
            touched={formik.touched.message}
          />
          <Button className="form__button" type="submit">Enviar</Button>
       </form>
    </ContactFormStyled>
  )
}

export default ContactForm
