import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLogo = styled.div`
  h1 {
    color: var(--deep-blue);
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
export const StyledNav = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  font-family: 'Roboto', sans-serif;
  li {
    cursor: pointer;
    color: var(--grey);
    font-size: 0.92rem;
    transition: var(--transition-2);
    &:hover {
      color: var(--orange);
    }
  }
`

export const StyledCart = styled.div`
  background-color: var(--orange);
  padding: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  color: var(--white);
  font-weight: 600;
  cursor: pointer;
  span {
    background-color: var(--deep-blue);
    border-radius: 50%;
    text-align: center;
    top: -5px;
    right: -5px;
    font-family: 'Roboto', sans-serif;
    font-size: 0.8rem;
    padding: 1px 5px;
    position: absolute;
    border: 1px solid var(--white);
  }
`
