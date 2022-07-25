import React from 'react'
import { Wrapper, Container } from './style'
import { ImQuotesLeft } from 'react-icons/im'
import test from '../../assets/images/test.jpeg'
import Slider from 'react-slick'
import { fadeLeft, zoomIn } from '../../utils/variants'
import { motion } from 'framer-motion'
// Import Swiper React components

const Testimonial = () => {
  return (
    <Wrapper>
      <Container
        variants={fadeLeft}
        initial='initial'
        whileInView='whileInView'
      >
        <ImQuotesLeft />
        <h3>
          The UK jewellery awards is an event we always look forward to and we
          are so honoured to be recognised.
        </h3>

        <h5>Jane Cooper</h5>
        <p>Naperville, USA</p>
        <motion.img
          variants={zoomIn}
          initial='initial'
          whileInView='whileInView'
          src={test}
          alt=''
        />
      </Container>
    </Wrapper>
  )
}

export default Testimonial
