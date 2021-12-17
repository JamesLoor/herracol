
import { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

const SearchBarStyled = styled.div`
  border: 1px solid ${theme.colors.secundaryLight};
  border-radius: 20px;

  input {
    color: ${theme.colors.black};
    padding: 10.5px 21px;
    width: 100%;
    font-weight: 600;
  }

  input::placeholder {
    color: ${theme.colors.black};
  }
`

const SearchBar = ({ className }) => {
  const [inputValue, setInputValue] = useState('')
  const handleSearch = (event) => {
    const query = event.target.value
    setInputValue(query)
    // searchProductByName(query)
  }
  return (
    <SearchBarStyled className={className}>
      <input
        type="text"
        placeholder="Buscar..."
        value={inputValue}
        onChange={handleSearch}
      />
    </SearchBarStyled>
  )
}

export default SearchBar
