import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  padding: 100px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 1200px) {
    max-width: 1300px;
    width: 100%;
    margin: 100px auto;
    padding: 30px 100px;
  }
`

export const StyledImg = styled(motion.div)`
  img {
    width: 350px;
    height: 450px;
  }
`
export const StyledAccordion = styled(motion.div)`
  span {
    color: var(--orange);
  }
  ul {
    margin-top: 50px;
  }
`
