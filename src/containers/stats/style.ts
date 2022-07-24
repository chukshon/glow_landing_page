import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 200px;
`
export const StyledContainer = styled.div`
  width: 900px;
  background-color: var(--light-orange);
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 100px;
  position: relative;
  .sideImg {
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
  }
`

export const StyledContent = styled.div`
  h1 {
    font-family: var(--ff-shippori);
    font-size: 2.4rem;
    font-weight: 500;
    span {
      color: var(--orange);
    }
  }
  p {
    color: var(--grey);
    font-family: var(--ff-roboto);
    font-weight: 300;
    font-size: 0.9rem;
    margin: 30px 0px;
  }
`

export const StyledStats = styled.div`
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
