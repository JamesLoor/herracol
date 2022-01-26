import React from 'react'
import styled from 'styled-components'

const TestimonialStyled = styled.div`
  box-shadow: 0px 0px 14px 0px #00000042;
  padding: 15px;

  .testimonial__container {
    display: flex;
    gap: 15px;
    align-items: center;
    margin-bottom: 10px;
  }

  .testimonial__figure {
    width: 70px;
    height: 70px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
  }

  .testimonial__name {
    font-size: 22px;
  }

  .testimonial__type {
    font-size: 14px;
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
