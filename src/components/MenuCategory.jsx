import OutsideClickHandler from 'react-outside-click-handler';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from './Icon'
import styled from 'styled-components'
import { categories } from '../data/categories.data'
import { theme } from '../theme'

const MenuCategoryStyled = styled.div`
  .menu__category {
    display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
    position: fixed;
    grid-template-rows: min-content min-content;
    width: 265px;
    top: 69px;
    left: 0;
    bottom: 0;
    z-index: 99;
    padding: 20px;
    /* background-color: ${theme.colors.secundaryLight}; */
    background-color: #E5E5E5;
    grid-gap: 17.5px;
  }

  .menu__category h2 {
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

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    .menu__category {
      top: 90px;
      bottom: 0;
      position: sticky;
      display: grid;
    }

    .menu__point {
      display: none;
    }

    .overlay {
      display: none;
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
        <h2>Categorias</h2>
        <ul>
            {categories.map(({ id, name, url }) => {
              return (
                <li key={id}><Link to={url} onClick={closeMenu}>{name}</Link></li>
              )
            })}
        </ul>
      </div>
    </MenuCategoryStyled>
  )
}

export default MenuCategory
