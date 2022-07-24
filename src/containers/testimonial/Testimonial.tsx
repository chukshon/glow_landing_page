import React from 'react'
import { Wrapper, Container } from './style'
import { ImQuotesLeft } from 'react-icons/im'
import testimonialsImg from '../../assets/images/testimonialsImg.jpg'

const Testimonial = () => {
  return (
    <Wrapper>
      <Container>
        <ImQuotesLeft />
        <h3>
          The UK jewellery awards is an event we always look forward to and we
          are so honoured to be recognised.
        </h3>

        <h5>Jane Cooper</h5>
        <p>Naperville, USA</p>
        <img src={testimonialsImg} alt='' />
      </Container>
    </Wrapper>
  )
}

export default Testimonial
