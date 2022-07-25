import React, { useEffect, useRef } from 'react'
import {
  Wrapper,
  StyledDetails,
  StyledContents,
  StyledGrid,
  StyledContent,
  TopImage,
  SideImage,
} from './style'
import topImageAbout from '../../assets/images/topImageAbout.webp'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  })
  const animation = useAnimation()
  const scrollRef = useRef(null)

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
    }
  }, [inView])
  return (
    <Wrapper ref={scrollRef}>
      <StyledDetails>
        <StyledContents
          initial={{ x: '-100' }}
          whileInView={{ x: '100' }}
          viewport={{ root: scrollRef }}
        >
          <h1>
            The self care brand that's
            <br /> setting a new
            <span>
              &nbsp;standard
              <br /> Clean&nbsp;
            </span>
            products.
          </h1>
          <StyledGrid>
            <StyledContent>
              <h3>
                Where are Products
                <br /> Made
              </h3>
              <p>
                Many brands,especially in period
                <br /> care,carry products that take centuries.
              </p>
            </StyledContent>
            <StyledContent>
              <h3>
                Where are Products
                <br /> Made
              </h3>
              <p>
                Many brands,especially in period
                <br /> care,carry products that take centuries.
              </p>
            </StyledContent>
          </StyledGrid>
        </StyledContents>
        <SideImage animate={animation}>
          <img src={topImageAbout} alt='' />
        </SideImage>
      </StyledDetails>
      <TopImage>
        <div className='star'>
          <div className='inner'>
            <h1 style={{ color: 'white' }}>New</h1>
          </div>
        </div>
        <img src={topImageAbout} alt='' />
      </TopImage>
    </Wrapper>
  )
}

export default About
