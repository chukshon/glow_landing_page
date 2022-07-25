import styled from 'styled-components'
import { motion } from 'framer-motion'

export const Wrapper = styled.div`
  margin-top: -100px;
  display: flex;
  position: relative;
  justify-content: flex-end;
  .grid {
    display: flex;
  }
`
export const StyledDetails = styled.div`
  width: 1000px;
  position: relative;
  background-color: #f1e3ef;
  display: flex;
  align-items: center;
  text-align: left;
  justify-content: center;
  padding-top: 150px;
  padding-bottom: 100px;
`
export const StyledContents = styled(motion.div)`
  width: 500px;
  h1 {
    color: var(--deep-blue);
    font-family: var(--shippori);
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 1.3;
    span {
      color: var(--orange);
    }
  }
`
export const StyledGrid = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 1.3rem;
`

export const StyledContent = styled.div`
  h3 {
    font-family: var(--ff-roboto);
    font-weight: 400;
    color: var(--deep-blue);
    line-height: 1.2;
    font-size: 1rem;
  }
  p {
    font-family: var(--ff-roboto);
    max-width: 200px;
    margin-top: 20px;
    color: #837b84;
    font-size: 0.8rem;
    font-weight: 400;

    line-height: 1.3;
  }
`
export const TopImage = styled.div`
  position: absolute;
  top: -50px;
  right: 70px;
  width: 230px;
  height: 150px;
  border: 3px solid var(--white);
  img {
    width: 100%;
    height: 100%;
  }

  .star {
    position: absolute;
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    background: white;
    padding: 5px;
    top: -70px;
    left: -70px;
    transform: rotate(-45deg);
  }
  .inner {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
    width: 120px;
    height: 120px;
    background: var(--orange);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
      color: var(--white);
      font-family: var(--ff-roboto);
      font-size: 0.85rem;
      font-weight: 400;
    }
  }
`
export const SideImage = styled(motion.div)`
  position: absolute;
  width: 380px;
  height: 450px;
  left: -300px;
  top: 60px;
  img {
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    width: 100%;
    height: 100%;
  }
`
