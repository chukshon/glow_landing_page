import React from 'react'
import {
  Wrapper,
  StyledContainer,
  StyledContent,
  StyledStats,
  SideImg,
} from './style'
import test from '../../assets/images/test.jpeg'
import {
  fadeUp,
  zoomIn,
  fadeLeft,
  staggerContainer,
} from '../../utils/variants'
import { motion } from 'framer-motion'
const Stats = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledContent
          variants={fadeUp}
          initial='initial'
          whileInView='whileInView'
        >
          <h1>
            We make going all <br />
            natural <span>Beauty</span>.
          </h1>
          <p>
            Made with nature's best ingredients ingredient - our
            products'transparent
            <br />
            ingredient lists allow you to know.
          </p>
        </StyledContent>
        <StyledStats
          variants={fadeLeft}
          initial='initial'
          whileInView='whileInView'
        >
          <div className='stats'>
            <h3>
              Product
              <br /> Users
            </h3>
            <h1>7M+</h1>
          </div>
          <div className='stats2'>
            <h3>
              Product
              <br /> Users
            </h3>
            <h1>99+</h1>
          </div>
          <div className='stats'>
            <h3>
              Product
              <br /> Users
            </h3>
            <h1>5M</h1>
          </div>
        </StyledStats>
        <SideImg variants={zoomIn} initial='initial' whileInView='whileInView'>
          <img src={test} alt='' />
        </SideImg>
      </StyledContainer>
    </Wrapper>
  )
}

export default Stats
