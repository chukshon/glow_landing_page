import { Wrapper, StyledImg, StyledAccordion } from './style'
import faqImg from '../../assets/images/faqImg.png'

import { accordionData } from '../../utils/accordionData'
import Accordion from '../../components/accordion/Accordion'
import { staggerContainer, fadeUp, zoomIn } from '../../utils/variants'
import { motion } from 'framer-motion'
const Faq = () => {
  return (
    <Wrapper>
      <StyledImg>
        <motion.img
          src={faqImg}
          alt=''
          variants={zoomIn}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        />
      </StyledImg>
      <StyledAccordion>
        <motion.h2
          variants={fadeUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
          className='h2'
        >
          You have <span>Questions,</span>
          <br /> we have answers.
        </motion.h2>
        <motion.ul
          variants={staggerContainer}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        >
          {accordionData.map((accordion) => {
            return (
              <Accordion
                key={accordion.id}
                title={accordion.title}
                description={accordion.description}
              />
            )
          })}
        </motion.ul>
      </StyledAccordion>
    </Wrapper>
  )
}

export default Faq
