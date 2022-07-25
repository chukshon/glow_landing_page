import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  margin-top: 100px;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  row-gap: 5.5rem;
  column-gap: 1rem;
  padding: 30px 100px;
`

export const Content = styled(motion.div)`
  h1 {
    font-size: 3rem;
    font-family: var(--ff-shippori);
    span {
      color: var(--orange);
    }
  }
  p {
    color: var(--grey);
    font-family: var(--ff-roboto);
    line-height: 1.7;
    font-size: 0.9rem;
    margin: 30px 0px;
  }
`
