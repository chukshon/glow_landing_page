import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import { Wrapper, HeroGrid, HeroContent } from './style'
import lady1 from '../../assets/images/lady1.png'
import heroImg from '../../assets/images/heroImg.png'
import Button from '../../components/button/Button'

const Hero = () => {
  return (
    <Wrapper>
      <NavBar />
      <HeroGrid>
        <HeroContent>
          <h2>
            Let your skin
            <br /> Going
            <img src={heroImg} alt='' />
            Out.
          </h2>
          <p>
            We want to bring to the world through our
            <br /> products that very special feeling joy, healthy and
            <br /> positive energy.
          </p>
          <Button text='Shop Now' transparent={false} />
        </HeroContent>
        <img src={lady1} alt='' />
      </HeroGrid>
    </Wrapper>
  )
}

export default Hero
