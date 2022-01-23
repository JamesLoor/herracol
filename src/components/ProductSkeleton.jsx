import styled from 'styled-components'
import { theme } from '../theme'

const ProductSkeletonStyled = styled.div`
  display: grid;
  grid-template-rows: 250px 1fr;
  height: 100%;
  cursor: pointer;
  transition: .3s;
  overflow: hidden;
  grid-gap: 10.5px;
  transition: ease box-shadow 0.3s;

  .product__image {
    display: block;
    width: 100%;
    height: 100%;
    border: 1px solid ${theme.colors.secundaryLight};
    overflow: hidden;
    background-color: ${theme.colors.skeleton};
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
    height: 13px;
    width: 60%;
    grid-area: name;
    overflow: hidden;
  }

  .product__brand {
    height: 13px;
    width: 60%;
    grid-area: brand;
    margin-bottom: 8px;
    overflow: hidden;
  }

  .product__price {
    height: 24px;
    width: 100%;
    grid-area: price;
    overflow: hidden;
  }

  .product__code {
    height: 13px;
    width: 50px;
    grid-area: code;
    justify-self: right;
    align-self: center;
    overflow: hidden;
  }

  .loading {
    position: relative;
    background-color: #C4C4C4;

    &::after {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      transform: translateX(-100%);
      background: linear-gradient(90deg, transparent, #D3D3D3, transparent);
      animation: loading 1.2s infinite;
    }
  }

  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
`

const ProductSkeleton = () => {
  return (
    <ProductSkeletonStyled>
      <figure className="product__image loading"></figure>
      <div className="product__data">
        <div className="product__name loading"></div>
        <div className="product__brand loading"></div>
        <div className="product__price loading"></div>
        <div className="product__code loading"></div>
      </div>
    </ProductSkeletonStyled>
  )
}

export default ProductSkeleton
