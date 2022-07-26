import React from 'react'
import NavBar from '../../components/navbar/NavBar'
import { Wrapper, HeroGrid, HeroContent, ButtonGrid } from './style'
import lady1 from '../../assets/images/lady1.png'
import heroImg from '../../assets/images/heroImg.png'
import Button from '../../components/button/Button'
import { IoIosPlay } from 'react-icons/io'
import { fadeUp } from '../../utils/variants'

const Hero = () => {
  return (
    <Wrapper>
      <NavBar />
      <HeroGrid>
        <HeroContent
          variants={fadeUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        >
          <h2 className='h1'>
            Let your skin
            <br /> Going
            <img src={heroImg} alt='' />
            Out.
          </h2>
          <p className='p grey_p'>
            We want to bring to the world through our
            <br /> products that very special feeling joy, healthy and
            <br /> positive energy.
          </p>
          <ButtonGrid>
            <Button text='Shop Now' transparent={false} />
            <div className='play_section'>
              <IoIosPlay />
              <p className='p deep_blue_p'>How to use</p>
            </div>
          </ButtonGrid>
        </HeroContent>
        <img src={lady1} alt='' />
      </HeroGrid>
    </Wrapper>
  )
}

export default Hero
