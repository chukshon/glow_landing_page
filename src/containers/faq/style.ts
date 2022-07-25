import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  padding: 100px 100px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const StyledImg = styled(motion.div)`
  img {
    width: 350px;
    height: 450px;
  }
`
export const StyledAccordion = styled(motion.div)`
  h1 {
    font-size: 2.5rem;
    font-family: var(--ff-shippori);
    font-weight: 500;
    color: var(--deep-blue);
    span {
      color: var(--orange);
    }
  }
  ul {
    margin-top: 50px;
  }
`
