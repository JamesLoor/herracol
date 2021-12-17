import styled from 'styled-components'
import useWindowSize from '../hooks/useWindowSize'

const ProductsCounterStyled = styled.div`
  /*  */
  align-self: center;
`

const ProductsCounter = ({ className }) => {
  const [innerWidth,] = useWindowSize()
  return (
    <ProductsCounterStyled className={className}>
      <span>{innerWidth < 768 ? '15 - 102' : 'Mostrando 15 de 102 productos'}</span>
    </ProductsCounterStyled>
  )
}

export default ProductsCounter
