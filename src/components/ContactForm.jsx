import React, { useState } from 'react'
import * as Yup from 'yup'
import axios from 'axios'
import Icon from './Icon'
import { useFormik } from 'formik'
import styled from 'styled-components'
import Input from './Input'
import Button from './Button'
import Textarea from './Textarea'
import { theme } from '../theme'
import Modal from './Modal'
import useModal from '../hooks/useModal'

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

const ContactModalError = styled.div`
  .contact__modal__header {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.error};
  }

  .contact__modal__main {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    padding: 10px;
  }

  .contact__modal__title {
    font-size: 20px;
    text-align: center;
  }
`

const ContactModalOk = styled.div`
  .contact__modal__header {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.ok};
  }

  .contact__modal__main {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 5px;
    padding: 10px;
  }

  .contact__modal__title {
    font-size: 20px;
    text-align: center;
  }
`

const ContactForm = ({ className }) => {
  const { isOpen, closeModal, openModal } = useModal()
  const initialValues = { name: '', email: '', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string(),
    email: Yup.string().email('Correo Invalido'),
    message: Yup.string().required('Obligatorio')
  })
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ok, msg});
  }
  const onSubmit = (values, actions) => {
    axios({
      method: "POST",
      url: "https://formspree.io/f/xgedvqje",
      data: values
    })
      .then(response => {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(true, "Thanks!");
        openModal()
      })
      .catch(error => {
        actions.setSubmitting(false);
        handleServerResponse(false, error.response.data.error);
        openModal()
      })
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })

  return (
    <>

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
      {
        isOpen &&
          (
            serverState.ok
              ? <Modal closeModal={closeModal} maxWidth={400}>
                  <ContactModalOk>
                    <div className="contact__modal__header">
                      <Icon icon="ok" width="100" height="100" color="white"/>
                    </div>
                    <div className="contact__modal__main">
                      <span className="contact__modal__title">¡Correo enviado!</span>
                      <span className="contact__modal__message">Gracias por comunicarte con nosotros.</span>
                    </div>
                  </ContactModalOk>
                </Modal>
              : <Modal closeModal={closeModal} maxWidth={400}>
                  <ContactModalError>
                    <div className="contact__modal__header">
                      <Icon icon="error" width="100" height="100" color="white"/>
                    </div>
                    <div className="contact__modal__main">
                      <span className="contact__modal__title">¡Opps!</span>
                      <span className="contact__modal__message">Algo salió mal, correo no fue enviado.</span>
                    </div>
                  </ContactModalError>
                </Modal>
          )
      }
    </>
  )
}

export default ContactForm
