import React from 'react'
import { Wrapper } from './style'
import topImageAbout from '../../assets/images/topImageAbout.webp'
import { AiOutlineInstagram } from 'react-icons/ai'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { fadeLeft, fadeUp } from '../../utils/variants'
const PortfolioCard = () => {
  return (
    <Wrapper variants={fadeLeft}>
      <img src={topImageAbout} alt='' />
      <div className='content'>
        <AiOutlineInstagram />
        <p>
          Join us and get all the services
          <br /> we provide
        </p>
        <span>
          <HiOutlineArrowNarrowRight />
        </span>
      </div>
    </Wrapper>
  )
}

export default PortfolioCard
