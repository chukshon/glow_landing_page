import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  margin-top: 200px;
  @media (min-width: 1200px) {
    max-width: 1300px;
    width: 100%;
    margin: 100px auto;
    padding: 30px 100px;
  }
`
export const StyledContainer = styled.div`
  width: 900px;
  background-color: var(--light-orange);
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 100px;
  position: relative;
`

export const StyledContent = styled(motion.div)`
  span {
    color: var(--orange);
  }
  p {
    margin: 10px 0px;
  }
`

export const StyledStats = styled(motion.div)`
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 1rem;
  .stats {
    /* display: inline-block; */
    background: linear-gradient(180deg, var(--white) 50%, var(--light-orange));
    height: 150px;
    width: 120px;
    padding: 0;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transform: rotate(20deg);
    color: var(--deep-blue);
    font-family: var(--ff-roboto);
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 30px;
    gap: 1rem;
    h3 {
      transform: rotate(-20deg);
      font-weight: 500;
      text-align: center;
      font-size: 0.9rem;
    }
    h1 {
      transform: rotate(-20deg);
      font-family: var(--ff-shippori);
      color: var(--orange);
      text-align: center;
    }
  }
  .stats2 {
    /* display: inline-block; */
    background: linear-gradient(180deg, var(--light-orange), var(--white) 50%);
    height: 150px;
    width: 120px;
    padding: 0;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    transform: rotate(20deg);
    color: var(--deep-blue);
    font-family: var(--ff-roboto);
    font-size: 0.9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 40px;
    gap: 1rem;
    h3 {
      transform: rotate(-20deg);
      font-weight: 500;
      text-align: center;
      font-size: 0.9rem;
    }
    h1 {
      transform: rotate(-20deg);
      font-family: var(--ff-shippori);
      color: var(--orange);
      text-align: center;
    }
  }
`
export const SideImg = styled(motion.div)`
  position: absolute;
  max-width: 400px;
  max-height: 200px;
  right: -170px;
  top: 50px;
  img {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    width: 350px;
    height: 450px;
  }
`
