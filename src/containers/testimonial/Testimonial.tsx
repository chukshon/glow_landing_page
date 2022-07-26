import { Wrapper, Container } from './style'
import { ImQuotesLeft } from 'react-icons/im'
import test from '../../assets/images/test.jpeg'

import { fadeLeft, zoomIn } from '../../utils/variants'
import { motion } from 'framer-motion'
import Slider from 'react-slick'

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
        <Container
          variants={fadeLeft}
          initial='initial'
          whileInView='whileInView'
        >
          <ImQuotesLeft size='4rem' style={{ color: 'var(--orange)' }} />
          <h3>
            The UK jewellery awards is an event we always look forward to and we
            are so honoured to be recognised.
          </h3>

          <h2 className='h3'>Jane Cooper</h2>
          <p className='p grey_p'>Naperville, USA</p>
          <motion.img
            variants={zoomIn}
            initial='initial'
            whileInView='whileInView'
            src={test}
            alt=''
          />
        </Container>
        <Container
          variants={fadeLeft}
          initial='initial'
          whileInView='whileInView'
        >
          <ImQuotesLeft size='4rem' style={{ color: 'var(--orange)' }} />
          <h3>
            The UK jewellery awards is an event we always look forward to and we
            are so honoured to be recognised.
          </h3>

          <h2 className='h3'>Jane Cooper</h2>
          <p className='p grey_p'>Naperville, USA</p>
          <motion.img
            variants={zoomIn}
            initial='initial'
            whileInView='whileInView'
            src={test}
            alt=''
          />
        </Container>
        <Container
          variants={fadeLeft}
          initial='initial'
          whileInView='whileInView'
        >
          <ImQuotesLeft size='4rem' style={{ color: 'var(--orange)' }} />
          <h3>
            The UK jewellery awards is an event we always look forward to and we
            are so honoured to be recognised.
          </h3>

          <h2 className='h3'>Jane Cooper</h2>
          <p className='p grey_p'>Naperville, USA</p>
          <motion.img
            variants={zoomIn}
            initial='initial'
            whileInView='whileInView'
            src={test}
            alt=''
          />
        </Container>
      </Slider>
    </Wrapper>
  )
}

export default Testimonial
