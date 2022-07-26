import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  margin-top: 200px;
  display: grid;
  grid-template-columns: 400px 400px 400px;
  row-gap: 5.5rem;
  column-gap: 1rem;
  padding: 30px 100px;
  @media (min-width: 1200px) {
    max-width: 1300px;
    width: 100%;
    margin: 200px auto;
    padding: 30px 100px;
  }
  @media (max-width: 1290px) {
    grid-template-columns: 350px 350px 350px;
  }
  @media (max-width: 1190px) {
    grid-template-columns: 300px 300px 300px;
  }
`

export const Content = styled(motion.div)`
  span {
    color: var(--orange);
  }
`
