/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Footer from '../components/Footer'
import MenuCategory from '../components/MenuCategory'
import ProductList from '../components/ProductList'
import ProductsCounter from '../components/ProductsCounter'
import SearchBar from '../components/SearchBar'
import { Wrapper } from '../globalStyles'
import useProducts from '../hooks/useProducts'

const ProductsStyled = styled.div`
  position: relative;
  padding-bottom: 50px;
  .products__container {
    display: grid;
    grid-template-columns: min-content max-content 1fr;
    grid-template-areas:
      "menu counter search"
      "productList productList productList";
    justify-content: space-between;
    align-items: center;
    grid-gap: 20px;
    padding-bottom: 50px;
  }

  .menu {
    grid-area: menu;

  }

  .search {
    grid-area: search;
  }

  .counter {
    grid-area: counter;
  }

  .product__list {
    grid-area: productList;
  }

  @media (min-width: 768px) {
    .products__container {
      grid-template-columns: min-content max-content 1fr;
      grid-template-rows: min-content 1fr;
      grid-template-areas:
        "menu counter search"
        "menu productList productList";
      align-items: stretch;
    }
  }
`

const Products = () => {
  const { category } = useParams()

  return (
    <ProductsStyled>
      <Wrapper>
        <div className="products__container">
          <MenuCategory className="menu" />
          <ProductsCounter className="counter" />
          <SearchBar  className="search" />
          <ProductList className="product__list" category={category}/>
        </div>
      </Wrapper>
      <Footer />
    </ProductsStyled>
  )
}

export default Products
