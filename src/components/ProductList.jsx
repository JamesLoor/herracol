import styled from 'styled-components'
import { products } from '../data/products.data'
import Product from './Product'

const ProductListStyled = styled.div`
  display: grid;
  /* grid-template-columns: ${({ isLoading }) => (isLoading ? '1fr' : 'repeat(auto-fill, minmax(200px, 1fr))')}; */
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  grid-gap: 25px;
  .product-list-empty {
    text-align: center;
  }
`

const ProductList = ({ className }) => {
  return (
    <ProductListStyled className={className}>
      {products.map((product) => {
        return (
          <Product key={product.id} {...product} />
        )
      })}
    </ProductListStyled>
  )
}

export default ProductList
