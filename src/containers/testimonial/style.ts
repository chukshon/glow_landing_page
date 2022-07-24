import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 50px 100px;
`

export const Container = styled.div`
  position: relative;
  background-color: var(--white);
  max-width: 1000px;
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
    width: 200px;
    height: 200px;
    right: -100px;
    top: 50px;
  }
`
