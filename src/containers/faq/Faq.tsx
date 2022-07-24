import React from 'react'
import { Wrapper, StyledImg } from './style'
import faqImg from '../../assets/images/faqImg.png'

const Faq = () => {
  return (
    <Wrapper>
      <StyledImg>
        <img src={faqImg} alt='' />
      </StyledImg>
    </Wrapper>
  )
}

export default Faq
