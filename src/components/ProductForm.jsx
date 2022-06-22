import React from 'react'
import styled from 'styled-components'
import * as Yup from 'yup'
import { useFormik } from 'formik'

// Data
import { categories } from '../data/categories.data'

// Theme
// import { theme } from '../theme'

// Components
import Input from './Input'
import Button from './Button'
import useProducts from '../hooks/useProducts'
import Select from './Select'
// import Icon from './Icon'
// import Modal from './Modal'
// import useModal from '../hooks/useModal'

const ProductFormStyled = styled.div`
  /*  */
`

const ProductForm = () => {
  const { createProduct } = useProducts()
  const initialValues = {
    name: '',
    image: {},
    brand: '',
    category: '',
    price: 0,
    code: '',
  }
  const validationSchema = Yup.object({
    // name: Yup.string().required('Obligatorio'),
    // image: Yup.mixed().required('Obligatorio'),
    // brand: Yup.string().required('Obligatorio'),
    // category: Yup.string().required('Obligatorio'),
    // price: Yup.number().required('Obligatorio'),
    // code: Yup.string().required('Obligatorio'),
    name: Yup.string(),
    image: Yup.mixed(),
    brand: Yup.string(),
    category: Yup.string(),
    price: Yup.number(),
    code: Yup.string(),
  })
  const onSubmit = async (values, actions) => {
    console.log(values.image)
    await createProduct(values)
    actions.resetForm()
  }
  const formik = useFormik({ initialValues, validationSchema, onSubmit })
  return (
    <ProductFormStyled>
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
          label="Imagen"
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className="input__image"
          onChange={(event) => {
            let file = event.currentTarget.files[0]
            formik.setFieldValue('image', file)
          }}
          error={formik.errors.image}
          touched={formik.touched.image}
        />
        <Input
          label="Marca"
          id="brand"
          name="brand"
          type="text"
          className="input__brand"
          onChange={formik.handleChange}
          value={formik.values.brand}
          error={formik.errors.brand}
          touched={formik.touched.brand}
        />
        <Select
          label="Categoria"
          id="category"
          name="category"
          type="text"
          options={categories}
          className="input__category"
          onChange={formik.handleChange}
          value={formik.values.category}
          error={formik.errors.category}
        />
        <Input
          label="Precio"
          id="price"
          name="price"
          type="number"
          min="0"
          step="0.01"
          className="input__price"
          onChange={formik.handleChange}
          value={formik.values.price}
          error={formik.errors.price}
          touched={formik.touched.price}
        />
        <Input
          label="Código"
          id="code"
          name="code"
          type="text"
          className="input__code"
          onChange={formik.handleChange}
          value={formik.values.code}
          error={formik.errors.code}
          touched={formik.touched.code}
        />
        <Button className="form__button" type="submit">Crear</Button>
      </form>
    </ProductFormStyled>
  )
}

export default ProductForm
