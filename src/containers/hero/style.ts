import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px 100px;
  @media (max-width: 1100px) {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 20px 50px;
  }
  @media (min-width: 1300px) {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 30px 100px;
  }
`
export const HeroGrid = styled(motion.div)`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroContent = styled(motion.div)`
  margin-top: 1rem;
  h2 {
    img {
      display: inline-block;
      padding: 0;
      width: 150px;
      height: 90px;
    }
  }
`
export const ButtonGrid = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  .play_section {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }
`
