import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  padding: 150px 100px 40px 100px;
  margin-top: -100px;
  background-color: var(--deep-blue);
`
export const FooterGrid = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  @media (min-width: 1400px) {
    max-width: 1300px;
    width: 100%;
    margin: 0 auto;
    padding: 0px 100px;
  }
`

export const ContactCol = styled(motion.div)`
  max-width: 220px;
  p {
    margin: 20px 0px;
    color: var(--white);
    font-family: var(--ff-roboto);
    line-height: 2;
    font-size: 0.8rem;
    font-weight: 400;
  }
`

export const FooterLogo = styled.div`
  h1 {
    margin-top: -10px;
    color: var(--white);
    font-weight: 400;
    font-family: var(--ff-shippori);
  }
  span {
    height: 10px;
    width: 10px;
    background-color: var(--orange);
    border-radius: 50%;
    display: inline-block;
  }
`
export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: var(--white);
`

export const QuickLinks = styled(motion.div)`
  display: flex;
  color: var(--white);
  flex-direction: column;
  gap: 1rem;
  h3 {
    font-family: var(--ff-roboto);
    font-size: 1rem;
    font-weight: 400;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-family: var(--ff-roboto);
    font-size: 0.85rem;
    font-weight: 300;
  }
`
export const Subscribe = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--white);
  font-family: var(--ff-roboto);
  h3 {
    font-weight: 400;
    font-size: 1rem;
  }
  p {
    font-size: 0.85rem;
    font-weight: 300;
  }
`

export const StyledForm = styled.div`
  display: flex;
  background-color: #262653;
  align-items: center;
  border-radius: 50px;
  padding-left: 20px;
  padding-right: 5px;
  font-family: var(--ff-roboto);
  input {
    border: none;
    outline: none;
  }
  button {
    background-color: var(--orange);
    border: 2px solid var(--white);
    border-radius: 50%;
    padding: 10px;
    display: flex;
    align-items: center;
  }
`
export const Copyright = styled.div`
  max-width: 500px;
  border-top: 1px solid #6d6d86;
  margin: 0 auto;
  margin-top: 100px;
  p {
    text-align: center;
    color: #6d6d86;

    padding-top: 20px;
    font-size: 0.8rem;
    font-family: var(--ff-roboto);
  }
`
