import React from 'react'
import { useState } from 'react'
import Icon from './Icon'
import styled from 'styled-components'
import { categories } from '../data/categories.data'
import { catalogsHerracol } from '../data/catalogsHerracol.data'
import { catalogsAgrimix } from '../data/catalogsAgrimix.data'
import { theme } from '../theme'
import CategoryItemList from './CategoryItemList'

const MenuCategoryStyled = styled.div`
  .menu__category {
    display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
    position: fixed;
    grid-template-rows: min-content min-content min-content min-content;
    width: 265px;
    top: 69px;
    left: 0;
    bottom: 0;
    z-index: 99;
    padding: 20px;
    background-color: #100d28;
    grid-gap: 17.5px;
  }

  .menu__category::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  .menu__category::-webkit-scrollbar-thumb {
    background: ${theme.colors.accent};
  }

  .menu__category h3 {
    font-size: 24px;
    font-weight: 1000;
    color: ${theme.colors.white};
  }

  .menu__category h4 {
    margin-top: 20px;
  }

  .menu__category ul {
    display: grid;
    gap: 10px;
  }

  .category__item__list {
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    padding: 7px 20px;
    background-color: #151136;
    color: ${theme.colors.white};
    cursor: pointer;
    height: 35px;
  }

  .category__item__list__icon {
    overflow: hidden;
  }

  /* .category__item__list:hover {
    color: ${theme.colors.link};
  } */

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.modalBackground};
  }

  .menu__category h4 {
    color: ${theme.colors.white}
  }

  .menu__catalog li button:hover {
    color: ${theme.colors.link};
  }

  @media (min-width: 768px) {
    .menu__category {
      top: 90px;
      bottom: 0;
      position: sticky;
      display: grid;
      background-color: #100d28;
    }

    .menu__point {
      display: none;
    }

    .overlay {
      display: none;
    }
  }

  @media (max-width: 768px) {
    @media (max-height: 810px) {
      .menu__category {
        height: calc(100vh - 60px);
        overflow-y: scroll;
      }
    }
  }

  @media (min-width: 768px) {
    @media (max-height: 810px) {
      .menu__category {
        height: calc(100vh - 100px);
        overflow-y: scroll;
      }
    }
  }

`

const MenuCategory = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <MenuCategoryStyled isOpen={isOpen} className={className}>
      {isOpen && <div onClick={closeMenu} className="overlay"></div>}

      <button onClick={openMenu} className="menu__point">
        <Icon icon="menuPoint" width="25" height="25" color="black" />
      </button>

      <div className="menu__category">
        <h3>Categorias</h3>
        <ul>
            {categories.map(({ id, name, url }) => {
              return (
                <CategoryItemList key={id} name={name} url={url} closeMenu={closeMenu}/>
              )
            })}
        </ul>

        <h4>Catálogo Herracol 2022</h4>
        <ul className="menu__catalog">
          {catalogsHerracol.map(({ id, name, url }) => {
            return (
              <CategoryItemList key={id} name={name} url={url} closeMenu={closeMenu}/>
            )
          })}
        </ul>

        <h4>Presentaciones Agrimix</h4>
        <ul className="menu__catalog">
          {catalogsAgrimix.map(({ id, name, url }) => {
            return (
              <CategoryItemList key={id} name={name} url={url} closeMenu={closeMenu}/>
            )
          })}
        </ul>
      </div>
    </MenuCategoryStyled>
  )
}

export default MenuCategory
