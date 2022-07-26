import styled from 'styled-components'
import { motion } from 'framer-motion'
export const Wrapper = styled(motion.div)`
  position: relative;
  max-width: 250px;
  max-height: 250px;
  &:hover .content {
    visibility: visible;
    transition: all 2s ease-in;
  }
  img {
    width: 250px;
    height: 250px;
  }
  .content {
    cursor: pointer;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--orange);
    visibility: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    text-align: center;

    span {
      background: #fe8159;
      border-radius: 50%;
      display: flex;
      align-items: center;
      color: var(--white);
      padding: 10px;
    }
  }
`
