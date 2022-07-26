import { Wrapper, Container } from './style'
import { ImQuotesLeft } from 'react-icons/im'

import { fadeLeft, zoomIn } from '../../utils/variants'
import { motion } from 'framer-motion'
import Slider from 'react-slick'
import { testimonialData } from '../../utils/testimonialData'
const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: (dots: any) => (
      <div>
        <ul
          style={{
            position: 'absolute',
            top: '-80px',
            right: '400px',
            margin: '0px',
            display: 'flex',
            justifyContent: 'center',
            gap: '0rem',
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        style={{
          position: 'absolute',
          width: '15px',
          height: '15px',
          color: 'blue',
          border: '1px solid var(--orange)',
          backgroundColor: 'transparent',
        }}
      ></div>
    ),
  }
  return (
    <Wrapper>
      <Slider {...settings}>
        {testimonialData.map((data, index) => {
          return (
            <Container
              variants={fadeLeft}
              initial='initial'
              whileInView='whileInView'
              viewport={{ once: true }}
              key={index}
            >
              <ImQuotesLeft size='4rem' style={{ color: 'var(--orange)' }} />
              <h3>{data.description}</h3>

              <h2 className='h3'>{data.name}</h2>
              <p className='p grey_p'>{data.location}</p>
              <motion.img
                variants={zoomIn}
                initial='initial'
                whileInView='whileInView'
                viewport={{ once: true }}
                src={data.image}
                alt=''
              />
            </Container>
          )
        })}
      </Slider>
    </Wrapper>
  )
}

export default Testimonial
