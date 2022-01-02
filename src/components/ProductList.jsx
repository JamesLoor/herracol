/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import styled from 'styled-components'
import Product from './Product'
import useProducts from '../hooks/useProducts'

const ProductListStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(215px, 1fr));
  grid-template-rows: min-content;
  justify-content: stretch;
  grid-gap: 25px;

  &.list__empty {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const ProductList = ({ className, category }) => {
  const { list, isListEmpty, isLoading } = useProducts()
  const { fetchProducts, getProductsByCategory } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    getProductsByCategory(category)
  }, [category])

  if(isLoading) {
    return (
      <ProductListStyled className={`${className} list__empty`}>
        <p>Cargando...</p>
      </ProductListStyled>
    )
  }

  if(isListEmpty) {
    return (
      <ProductListStyled className={`${className} list__empty`}>
        <p>El producto que busca no se encuentra</p>
      </ProductListStyled>
    )
  }

  return (
    <ProductListStyled className={className}>
      {list.map((product) => {
        return (
          <Product key={product.id} {...product} />
        )
      })}
    </ProductListStyled>
  )
}

export default ProductList
