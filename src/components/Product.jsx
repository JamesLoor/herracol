import React from 'react'
import styled from 'styled-components'
import useModal from '../hooks/useModal'
import { theme } from '../theme'
import ButtonWhatsApp from './ButtonWhatsApp'
import Modal from './Modal'
import Link from './Link'
import Button from './Button'

const ProductStyled = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  height: 100%;
  transition: .3s;
  overflow: hidden;
  grid-gap: 10.5px;

  &:hover .product__image img {
    transform: scale(1.2);
  }

  .product__image {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.secundaryLight};
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: .3s;
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
    text-transform: capitalize;
  }

  .product__brand {
    font-size: 12px;
    grid-area: brand;
    margin-bottom: 8px;
    text-transform: capitalize;
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

  .product__button {
    width: 100px;
    padding: 5px;
  }
`

const ProductModalStyled = styled.div`

  .modal__image {
    display: block;
    width: 100%;
    height: 250px;
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
    padding: 10px 15px;
    max-height: 216px;
    overflow: scroll;
  }

  .modal__category {
    text-transform: capitalize;
    font-size: 12px;
  }

  .modal__name {
    font-size: 22px;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .modal__brand,
  .modal__stock {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
  }

  .modal__brand span,
  .modal__stock span {
    font-size: 10px;
    font-weight: 400;
  }

  .modal__stock {
    margin-bottom: 5px;
  }

  .modal__price {
    display: flex;
    font-size: 20px;
    font-weight: 1000;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: flex-end;
  }

  .modal__price span {
    font-size: 12px;
    font-weight: 400;
  }

  .modal__button {
    justify-self: center;
    width: 100%;
  }

  .modal__infoCode {
    font-size: 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 5px;
  }

  .modal__infoCode span{
    font-size: 10px;
  }

  .modal__linksContainer {
    margin-bottom: 15px;
  }

  .modal__moreinfo {
    text-align: left;
    margin-right: 10px;
    color: ${theme.colors.link};
  }

  .modal__infoContainer {
    margin-bottom: 15px;
  }



  @media (min-width: 425px) {
    .modal__image {
      height: 400px;
    }

    .modal__button {
      width: 100%;
    }
  }

  @media (min-width: 768px) {
    & {
      display: grid;
      grid-template-columns: 300px 1fr;
      padding: 20px;
    }

    .modal__image {
      height: 400px;
    }

    .modal__info {
      align-self: center;
      grid-auto-rows: min-content;
      overflow: auto;
      max-height: none;
    }

    .modal__category {
      font-size: 14px;
    }

    .modal__name {
      font-size: 30px;
      font-weight: 1000;
      margin-bottom: 15px;
    }

    .modal__brand,
    .modal__stock {
      font-size: 14px;
    }

    .modal__brand span,
    .modal__stock span {
      font-size: 14px;
    }

    .modal__stock {
      margin-bottom: 15px;
    }

    .modal__button {
      width: 100%;
    }

    .modal__infoContainer {
      max-height: 120px;
      overflow: scroll;
    }
  }
`

const Product = ({ id, image, name, brand, code, category, links, infoCode }) => {
  const { isOpen, openModal, closeModal } = useModal()
  const message = `Hola, estoy interesado en el siguiente producto
  *${name}*
  Categoría: ${category}
  Código: ${code}
  Marca: ${brand}
  Imagen: ${image}`

  return (
    <>
      <ProductStyled id={id}>
        <figure className="product__image">
          <img loading="lazy" src={image} alt={name} />
        </figure>
        <div className="product__data">
          <h4 className="product__name">{name}</h4>
          <span className="product__brand">{brand}</span>
          <Button className="product__button" onClick={() => openModal()}>Ver más</Button>
          {code !== "" && <span className="product__code">{`COD: ${code}`}</span>}
        </div>
      </ProductStyled>
      {
        isOpen &&
        <Modal closeModal={closeModal}>
          <ProductModalStyled>
            <figure className="modal__image">
              <img loading="lazy" src={image} alt={name} />
            </figure>
            <div className="modal__info">
              <p className="modal__category">{category.join(', ')}</p>
              <h4 className="modal__name">{name}</h4>
              <p className="modal__brand">Marca: <span>{brand}</span></p>
              <p className="modal__stock">Disponible: <span>✔</span></p>
              {infoCode &&
                <div className="modal__infoContainer">
                  {infoCode && infoCode.map(({ info, code }) => {
                    return (
                      <p key={`${info}${code}`} className="modal__infoCode">{info} <span>{code}</span></p>
                    )
                  })}
                </div>
              }
              {links &&
                <div className="modal__linksContainer">
                  {links && links.map((link, index) => {
                    return (
                      <Link key={index} to={link} className="modal__moreinfo">PDF</Link>
                    )
                  })}
                </div>
              }
              <ButtonWhatsApp className="modal__button" message={message}/>
            </div>
          </ProductModalStyled>
        </Modal>
      }
    </>
  )
}

export default Product
