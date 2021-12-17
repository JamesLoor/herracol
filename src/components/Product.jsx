import styled from 'styled-components'

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
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
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

const Product = ({ image, name, brand, price, code }) => {
  const handleModal = () => {}
  return (
    <ProductStyled onClick={handleModal}>
      <figure className="product__image">
        <img src={image} alt={name} />
      </figure>
      <div className="product__data">
        <h4 className="product__name">{name}</h4>
        <span className="product__brand">{brand}</span>
        <span className="product__price">{`$ ${price.toFixed(2)}`}</span>
        <span className="product__code">{`COD:${code}`}</span>
      </div>
    </ProductStyled>
  )
}

export default Product
