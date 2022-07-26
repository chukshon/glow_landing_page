import React from 'react'
import { Wrapper } from './style'
import topImageAbout from '../../assets/images/topImageAbout.webp'
import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { fadeLeft, fadeUp, accordionDropDown } from '../../utils/variants'
import { motion } from 'framer-motion'
const PortfolioCard = () => {
  return (
    <Wrapper variants={fadeLeft}>
      <img src={topImageAbout} alt='' />
      <motion.div
        className='content'
        variants={accordionDropDown}
        initial='initial'
        animate='animate'
        exit='initial'
      >
        <AiOutlineInstagram style={{ color: 'var(--white)' }} size='3rem' />
        <p className='p white_p'>
          Join us and get all the services
          <br /> we provide
        </p>
        <span>
          <HiOutlineArrowNarrowRight />
        </span>
      </motion.div>
    </Wrapper>
  )
}

export default PortfolioCard
