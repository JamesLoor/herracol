import React, { useState } from 'react'
import styled from 'styled-components'
import { itemsMenuAdmin } from '../data/itemsMenuAdmin.data'
import MenuAdminItem from './MenuAdminItem'
import { theme } from '../theme'
import Icon from './Icon'

const MenuAdminStyled = styled.div`
  display: flex;
  align-items: center;
  .menu__open {
    display: ${({ isOpen }) => isOpen ? 'none' : 'flex'};
    justify-content: center;
    align-items: center;
    justify-self: center;
    align-self: center;
    cursor: pointer;
  }

  .menu__nav {
    display: ${({ isOpen }) => isOpen ? 'grid' : 'none'};
    position: fixed;
    grid-auto-rows: min-content;
    width: 265px;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 99;
    padding: 20px;
    background-color: ${theme.colors.primary};
    grid-gap: 17.5px;
  }

  .nav__header {
    color: ${theme.colors.secundaryDark};
    margin-bottom: 10px;
  }

  .menu__nav ul {
    display: grid;
    grid-gap: 10px;
  }

  .menu__nav h3 {
    font-size: 32px;
    color: ${theme.colors.accent};
  }

  .line {
    display: block;
    width: 30px;
    height: 2px;
    background-color: ${theme.colors.accent};
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${theme.colors.modalBackground};
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    .menu__nav {
      display: grid;
      top: 0;
      bottom: 0;
      display: grid;
      background-color: ${theme.colors.primary};
    }

    .menu__point {
      display: none;
    }

    .overlay {
      display: none;
    }
  }

  /* @media (max-width: 768px) {
    @media (max-height: 1460px) {
      .menu__nav {
        height: calc(100vh - 60px);
        overflow-y: scroll;
      }
    }
  }

  @media (min-width: 768px) {
    @media (max-height: 1460px) {
      .menu__nav {
        height: calc(100vh - 100px);
        overflow-y: scroll;
      }
    }
  } */
`

const MenuAdmin = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => {
    setIsOpen(true)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }
  return (
    <MenuAdminStyled isOpen={isOpen} className={className}>
      {isOpen && <div onClick={closeMenu} className="overlay"></div>}

      <button onClick={openMenu} className="menu__point">
        <Icon icon="menu" width="20" height="20" color="white" />
      </button>

      <div className="menu__nav">
        <h3>Admin <span className="line"></span></h3>
        <ul>
          <h4 className="nav__header">Dashboard</h4>
          <MenuAdminItem name="Inicio" url="/admin" closeMenu={closeMenu} />
        </ul>
        <ul>
          <h4 className="nav__header">Apps</h4>
          {itemsMenuAdmin.map(({ id, name, path }) => {
              return (
                <MenuAdminItem key={id} name={name} url={path} closeMenu={closeMenu}/>
              )
            })}
        </ul>
      </div>
    </MenuAdminStyled>
  )
}

export default MenuAdmin
