import React from 'react'
import styled from 'styled-components'
import useProducts from '../hooks/useProducts'
import useWindowSize from '../hooks/useWindowSize'

const ProductsCounterStyled = styled.div`
  align-self: center;
`

const ProductsCounter = ({ className }) => {
  const { totalProducts, totalProductsShowed } = useProducts()
  const [innerWidth,] = useWindowSize()
  return (
    <ProductsCounterStyled className={className}>
      <span>{innerWidth < 768 ? `${totalProductsShowed} de ${totalProducts}` : `Mostrando ${totalProductsShowed} de ${totalProducts} productos`}</span>
    </ProductsCounterStyled>
  )
}

export default ProductsCounter
