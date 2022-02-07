import React from 'react'
import styled from 'styled-components'
import Link from './Link'
import Icon from './Icon'
import { theme } from '../theme'

const CategoryItemListStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  padding: 7px 20px;
  background-color: #151136;
  color: ${theme.colors.white};
  cursor: pointer;
  height: 35px;

  .category__item__list__icon {
    overflow: hidden;
  }
`

const CategoryItemList = ({ name, url, closeMenu }) => {
  return (
    <CategoryItemListStyled
      className="category__item__list"
      to={url}
      onClick={closeMenu}
    >
      {name}
      <Icon
        icon="arrowRight"
        width="10"
        height="10"
        color="white"
        className="category__item__list__icon"
      />
    </CategoryItemListStyled>
  )
}

export default CategoryItemList
