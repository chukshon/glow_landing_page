import styled from 'styled-components'
import { motion } from 'framer-motion'
export const IconGroup = styled.div`
  position: absolute;
  bottom: 30px;
  right: 10px;
  visibility: hidden;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const Wrapper = styled(motion.div)`
  max-width: 350px;
  position: relative;
  max-height: 350px;
  cursor: pointer;
  h2 {
    color: var(--deep-blue);
    font-size: 1.3rem;
    text-align: center;
    font-weight: 500;
    margin: 10px 0px;
  }
  p {
    color: var(--grey);
    text-align: center;
  }
  &:hover ${IconGroup} {
    visibility: visible;
    pointer-events: all;
  }
  img {
    width: 100%;
    height: 100%;
  }
`

export const Icons = styled.div`
  display: inline;
  background-color: transparent;
  border: 1px solid var(--orange);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  color: var(--orange);
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--orange);
    color: var(--white);
  }
`
