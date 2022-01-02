import React from 'react'
import styled from 'styled-components'
import useModal from '../hooks/useModal'
import { theme } from '../theme'
import ButtonWhatsApp from './ButtonWhatsApp'
import Modal from './Modal'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  height: 100%;
  cursor: pointer;
  transition: .3s;
  overflow: hidden;
  grid-gap: 10.5px;

  .product__image {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.secundaryLight};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .product__data {
    display: grid;
    grid-template-areas:
      "name name"
      "brand brand"
      "price code";
  }

  .product__name {
    font-size: 14px;
    font-weight: 700;
    grid-area: name;
  }

  .product__brand {
    font-size: 12px;
    grid-area: brand;
    margin-bottom: 8px;
  }

  .product__price {
    font-size: 20px;
    font-weight: 1000;
    grid-area: price;
  }

  .product__code {
    font-size: 12px;
    text-align: right;
    grid-area: code;
    align-self: flex-end;
  }
`

const ProductModalStyled = styled.div`
  .modal__image {
    display: block;
    width: 100%;
    height: 300px;
    border: 1px solid ${theme.colors.secundaryLight};
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .modal__info {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 6px;
    padding: 20px;
  }
`

const Product = ({ image, name, brand, price, code, category }) => {
  const { isOpen, openModal, closeModal } = useModal()
  const message = `Hola, estoy interesado en el siguiente producto
  *${name}*
  Precio: $ ${price}
  Categoría: ${category}
  Imagen: ${image}
  Código: ${code}`
  return (
    <>
      <ProductStyled onClick={() => openModal()}>
        <figure className="product__image">
          <img src={image} alt={name} loading="lazy" />
        </figure>
        <div className="product__data">
          <h4 className="product__name">{name}</h4>
          <span className="product__brand">{brand}</span>
          <span className="product__price">{`$ ${price.toFixed(2)}`}</span>
          <span className="product__code">{`COD: ${code}`}</span>
        </div>
      </ProductStyled>
      {
        isOpen &&
        <Modal closeModal={closeModal}>
          <ProductModalStyled>
            <figure className="modal__image">
              <img src={image} alt={name} />
            </figure>
            <div className="modal__info">
              <span className="modal__category">{category}</span>
              <h4 className="modal__name">{name}</h4>
              <span className="modal__brand">{`Marca: ${brand}`}</span>
              <span className="modal__brand">{`Código: ${code}`}</span>
              <span className="modal__stock">{`Disponible: ✔`}</span>
              <span className="modal__price">{`$ ${price.toFixed(2)}`}</span>
              <ButtonWhatsApp message={message}/>
            </div>
          </ProductModalStyled>
        </Modal>
      }
    </>
  )
}

export default Product
