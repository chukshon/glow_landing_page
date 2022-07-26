import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  padding: 50px 100px;
  display: flex;
  gap: 1.3rem;
  @media (min-width: 1200px) {
    max-width: 1300px;
    width: 100%;
    margin: 100px auto;
    padding: 30px 100px;
  }
`
