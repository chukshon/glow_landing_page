import styled from 'styled-components'

export const Wrapper = styled.div`
  border-top: 1px solid red;
  max-width: 350px;
  padding: 20px 0px;
  &:last-child {
    border-bottom: 1px solid red;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  p {
    margin-top: 20px;
  }
`
