import React from 'react'
import { useState } from 'react'
import Link from './Link'
import Icon from './Icon'
import styled from 'styled-components'
import { categories } from '../data/categories.data'
import { theme } from '../theme'
// import { catalogs } from '../data/catalogs.data'

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
    background-color: #E5E5E5;
    grid-gap: 17.5px;
  }

  .menu__category h3 {
    font-size: 24px;
    font-weight: 1000;
    color: ${theme.colors.black};
  }

  .menu__category ul {
    display: grid;
    gap: 6px;
  }

  .menu__category li a {
    color: ${theme.colors.black};
  }

  .menu__category li a:hover {
    color: ${theme.colors.link};
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.modalBackground};
  }

  .menu__catalogue li button:hover {
    color: ${theme.colors.link};
  }

  @media (min-width: 768px) {
    .menu__category {
      top: 90px;
      bottom: 0;
      position: sticky;
      display: grid;
      background-color: transparent;
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
                <li key={id}><Link to={url} onClick={closeMenu}>{name}</Link></li>
              )
            })}
        </ul>

        <h4>Catálogo Herracol 2022</h4>
        <ul className="menu__catalogue">
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FHerracol%2FCatalogoHerracol2022.pdf?alt=media" onClick={closeMenu}>PDF</Link></li>
          <li><Link to="https://online.fliphtml5.com/mfsdq/qmxs" onClick={closeMenu}>FLIP (Libro)</Link></li>
          {/* {catalogs.map(({id, title, link}) => {
            return (
              <li key={id}><Link to={link} onClick={closeMenu}>{title}</Link></li>
            )
          })} */}
        </ul>

        <h4>Presentaciones Agrimix</h4>
        <ul className="menu__catalogue">
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FAgrimix%20Presentacion%20Espanol.pdf?alt=media" onClick={closeMenu}>Agrimix</Link></li>
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FPresentacion%20Agrimix.pdf?alt=media" onClick={closeMenu}>Productos 1</Link></li>
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FAgrimix%20-%20Presentacion%20Cuchillas-Extractor%20etc.pdf?alt=media" onClick={closeMenu}>Productos 2</Link></li>
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FPresentaci%C3%B3n%20del%20Mando%20Final%20COMER%20-%20Cosechadora%20de%20Ca%C3%B1a.pdf?alt=media" onClick={closeMenu}>Cosechadora De Caña</Link></li>
          <li><Link to="https://firebasestorage.googleapis.com/v0/b/herracol-api-8820d.appspot.com/o/catalogue%2FAgrimix%2FCapuchones-convertido.pdf?alt=media" onClick={closeMenu}>Componentes De Cosechadora</Link></li>
          {/* {catalogs.map(({id, title, link}) => {
            return (
              <li key={id}><Link to={link} onClick={closeMenu}>{title}</Link></li>
            )
          })} */}
        </ul>
      </div>
    </MenuCategoryStyled>
  )
}

export default MenuCategory
