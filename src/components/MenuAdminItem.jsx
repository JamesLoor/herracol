import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'
import { theme } from '../theme'

const MenuAdminItemStyled = styled.div`
  .item__list {
    display: flex;
    justify-content: space-between;
    border-radius: 5px;
    padding: 7px 20px;
    background-color: ${theme.colors.primaryDark};
    color: ${theme.colors.white};
    cursor: pointer;
    height: 35px;
    transition: .3s;
  }

  .item__list:hover {
    color: ${theme.colors.black};
    background-color: ${theme.colors.accent};
    transition: .3s;

    path {
      fill: ${theme.colors.black};
    }
  }

  .item__list.active {
    background: ${theme.colors.accent};
    color: ${theme.colors.black};

    path {
      fill: ${theme.colors.black};
    }
  }
`

const MenuAdminItem = ({ name, url, closeMenu, type }) => {
  return (
    <MenuAdminItemStyled>
      <Link
        to={url}
        onClick={closeMenu}
        // className={isMatch ? "item__list active" : "item__list"}
        className="item__list"
      >
        {name}
        <Icon
          icon="arrowRight"
          width="10"
          height="10"
          color="white"
        />
      </Link>
    </MenuAdminItemStyled>
  )
}

export default MenuAdminItem
