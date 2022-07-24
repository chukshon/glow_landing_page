import styled from 'styled-components'

export const StyledButton = styled.button`
  padding: 15px 20px;
  border: none;
  background-color: var(--orange);
  color: var(--white);
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-family: var(--ff-roboto);
  font-size: 0.85rem;
  font-weight: 400;
  &.transparent {
    color: var(--orange);
    background: transparent;
    border: 1px solid var(--orange);
  }
`
export const StyledButtonTransparent = styled.button
