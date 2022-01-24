import React from 'react'
import styled from 'styled-components'

const TestimonialStyled = styled.div`
  .testimonial__container {
    display: flex;
  }

  .testimonial__figure {
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
    border: 1px solid black;
  }
`

const Testimonial = ({ image, name, type, text }) => {
  return (
    <TestimonialStyled>
      <div className="testimonial__container">
        <figure className="testimonial__figure">
          <img src={image} alt=""/>
        </figure>
        <div>
          <h3 className="testimonial__name">{name}</h3>
          <span className="testimonial__type">{type}</span>
        </div>
      </div>
      <p className="testimonial__tet">{text}</p>
    </TestimonialStyled>
  )
}

export default Testimonial
