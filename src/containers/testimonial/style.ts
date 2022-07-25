import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled(motion.div)`
  padding: 50px 100px;
  position: relative;
`

export const Container = styled(motion.div)`
  position: relative;
  background-color: var(--white);
  max-width: 900px;
  padding: 50px 0px 50px 40px;

  h3 {
    margin-top: 30px;
    margin-bottom: 30px;
    max-width: 400px;
  }

  img {
    position: absolute;
    border: 5px solid #f9f3ee;
    border-radius: 50%;
    width: 230px;
    height: 230px;
    right: -100px;
    top: 30px;
  }
`
