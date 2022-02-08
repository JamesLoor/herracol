import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { theme } from '../theme'
import Icon from './Icon'

const MenuStyled = styled.div`
  .menu__open {
    display: ${({ isOpen }) => isOpen ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .menu__close {
    display: ${({ isOpen }) => isOpen ? 'block' : 'none'};
    position: absolute;
    top: 22px;
    right: 5%;
    z-index: ${theme.positions.menuIconClose};
  }

  .menu__nav {
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    grid-auto-flow: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: ${theme.positions.menu};
    background-color: ${theme.colors.secundaryDark};
  }

  .menu__nav ul {
    display: grid;
    grid-auto-flow: row;
    gap: 20px;
  }

  .menu__nav li a {
    color: ${theme.colors.white};
    font-size: 18px;
    font-weight: bold;
    transition: 0.3s;
    transition-property: border-bottom-left-radius;
  }

  .link__active {
    border-bottom: 2px solid ${theme.colors.accent};
  }

  @media (min-width: 768px) {
    .menu__open {
      display: none;
    }

    .menu__close {
      display: none;
    }

    .menu__nav {
      position: static;
      display: block;
      background-color: transparent;
    }

    .menu__nav ul {
      grid-auto-flow: column;
      gap: 50px;
    }
  }
`

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleMenuOpen = () => {
    setIsOpen(true)
  }

  const handleMenuClose = () => {
    setIsOpen(false)
  }

  return (
    <MenuStyled isOpen={isOpen}>
      <button onClick={handleMenuOpen} className='menu__open'>
        <Icon icon="menu" width="25" height="25" color="white" />
      </button>

      <button onClick={handleMenuClose} className='menu__close'>
        <Icon icon="menuClose" width="25" height="25" color="white" />
      </button>

      <nav className='menu__nav'>
        <ul>
          <li onClick={handleMenuClose}>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? 'link__active' : ''}
            >
              Inicio
            </NavLink>
          </li>
          <li onClick={handleMenuClose}>
            <NavLink
              to="/productos"
              className={({ isActive }) => isActive ? 'link__active' : ''}
            >
              Productos
            </NavLink>
          </li>
          <li onClick={handleMenuClose}>
            <NavLink
              to="/contacto"
              className={({ isActive }) => isActive ? 'link__active' : ''}
            >
              Contacto
            </NavLink>
          </li>
        </ul>
      </nav>
    </MenuStyled>
  )
}

export default Menu
