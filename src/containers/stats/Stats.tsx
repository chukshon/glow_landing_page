import React from 'react'
import { Wrapper, StyledContainer, StyledContent, StyledStats } from './style'
import statsImg from '../../assets/images/statsImg.jpg'
const Stats = () => {
  return (
    <Wrapper>
      <StyledContainer>
        <StyledContent>
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
        <StyledStats>
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
        <div className='sideImg'>
          <img src={statsImg} alt='' />
        </div>
      </StyledContainer>
    </Wrapper>
  )
}

export default Stats
