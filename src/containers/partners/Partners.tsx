import React from 'react'
import { Wrapper } from './style'
import partners from '../../assets/images/partners.png'
import { fadeLeft, fadeUp } from '../../utils/variants'
const Partners = () => {
  return (
    <Wrapper variants={fadeLeft} initial='initial' whileInView='whileInView'>
      <img src={partners} alt='' />
    </Wrapper>
  )
}

export default Partners
