import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
  border-top: 1px solid #c0b4dd;
  max-width: 400px;
  padding: 20px 0px;
  &:last-child {
    border-bottom: 1px solid #c0b4dd;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  p {
    margin-top: 20px;
  }
`
