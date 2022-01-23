/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Suspense, lazy } from 'react'
import styled from 'styled-components'
import useProducts from '../hooks/useProducts'
import ProductSkeleton from './ProductSkeleton'

const Product = lazy(() => import('./Product'))

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
  const { list, isListEmpty, isLoading, fetchProducts, getProductsByCategory } = useProducts()

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
          <Suspense key={product.id} fallback={<ProductSkeleton/>}>
            <Product {...product} />
          </Suspense>
        )
      })}
    </ProductListStyled>
  )
}

export default ProductList
