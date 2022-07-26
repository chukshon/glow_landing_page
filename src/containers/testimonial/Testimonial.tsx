import { Wrapper, Container } from './style'
import { ImQuotesLeft } from 'react-icons/im'
import test from '../../assets/images/test.jpeg'

import { fadeLeft, zoomIn } from '../../utils/variants'
import { motion } from 'framer-motion'

const Testimonial = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Testimonial
