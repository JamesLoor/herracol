import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'
import Input from './Input'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import Button from './Button'
import Select from './Select'
import { role } from '../data/role.data'
import useUser from '../hooks/useUser'

const UserFormStyled = styled.div`
  .form__container {
    display: grid;
    position: fixed;
    grid-auto-rows: min-content;
    width: 320px;
    top: 0;
    right: ${({ isOpen }) => isOpen ? '0' : '-320px'};
    bottom: 0;
    padding: 20px;
    background-color: ${theme.colors.primary};
    grid-gap: 17.5px;
    z-index: ${theme.positions.modal};
    overflow-y: scroll;
  }

  .form__container::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 5px;
    height: 5px;
  }

  .form__container::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
  }

  .form__container h3 {
    font-size: 20px;
    color: ${theme.colors.accent};
  }

  .line {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.accent};
  }

  .form__container input {
    border: none;
    background-color: #FFFFFF33;
    color: ${theme.colors.white};
  }

  .form__container label {
    color: #FFFFFF;
  }

  .form__buton__container {
    display: flex;
    gap: 10px;
  }

  .form__button {
    width: max-content;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.modalBackground};
    z-index: ${theme.positions.modal};
    cursor: pointer;
  }
`

const UserForm = ({ isOpen, closeForm }) => {
  const { createUser } = useUser()
  const initialValues = {
    username: '',
    phoneNumber: '',
    role: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(4),
    phoneNumber: Yup.string().min(7),
    role: Yup.string(),
    email: Yup.string().email('Correo invalido').required('Correo requerido'),
    password: Yup.string().min(8, "Minimo 8 caracteres").required('Requerida'),
    passwordConfirmation:Yup
    .string()
    .required('Requerida')
    .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
  })
  const onSubmit = async (values, actions) => {
    createUser(values)
    // actions.resetForm()
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  const cancelForm = () => {
    closeForm()
    formik.resetForm()
  }
  return (
    <UserFormStyled isOpen={isOpen}>
      {isOpen && <div onClick={closeForm} className="overlay"></div>}
      <form className="form__container" onSubmit={formik.handleSubmit}>
        <h3>Nuevo Usuario <span className="line"></span></h3>
        <Input
          label="Nombre de usuario"
          id="username"
          name="username"
          type="text"
          className="input__username"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
          touched={formik.touched.username}
        />
        <Input
          label="Telefono"
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          className="input__phoneNumber"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
        />
        <Select
          label="Rol"
          id="role"
          name="role"
          type="text"
          options={role}
          className="input__role"
          onChange={(selectedOption) => {
            console.log(selectedOption)
            formik.setFieldValue('role', selectedOption)
          }}
          value={formik.values.role}
          error={formik.errors.role}
          touched={formik.touched.role}
        />
        <Input
          label="Correo Electronico"
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
        <Input
          label="Confirmar Contraseña"
          id="passwordConfirmation"
          name="passwordConfirmation"
          type="password"
          className="input__passwordConfirmation"
          onChange={formik.handleChange}
          value={formik.values.passwordConfirmation}
          error={formik.errors.passwordConfirmation}
          touched={formik.touched.passwordConfirmation}
        />
        <div className="form__buton__container">
          <Button className="form__button" type="submit">Crear</Button>
          <Button className="form__button" onClick={cancelForm} type="button">Cancelar</Button>
        </div>
      </form>
    </UserFormStyled>
  )
}

export default UserForm
