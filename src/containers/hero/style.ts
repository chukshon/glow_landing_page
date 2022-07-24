import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 30px 100px;
`
export const HeroGrid = styled.div`
  padding-top: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeroContent = styled.div`
  margin-top: 1rem;
  h2 {
    font-size: 4rem;
    font-family: var(--ff-shippori);
    color: var(--deep-blue);
    font-weight: 500;
    letter-spacing: -1px;
    img {
      display: inline-block;
      padding: 0;
      width: 150px;
      height: 90px;
    }
  }
  p {
    color: var(--grey);
    font-family: var(--ff-roboto);
    font-weight: 400;
    font-size: 0.9rem;
    padding: 20px 0px;
    line-height: 1.5;
  }
`
