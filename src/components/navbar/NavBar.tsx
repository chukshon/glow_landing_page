import React from 'react'
import { navData } from '../../utils/navData'
import { Wrapper, StyledLogo, StyledNav, StyledCart, StyledList } from './style'
import { IoBagOutline } from 'react-icons/io5'

const NavBar = () => {
  return (
    <Wrapper>
      <StyledLogo>
        <h1>
          Glow<span></span>
        </h1>
      </StyledLogo>
      <StyledNav>
        <StyledList>
          {navData.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </StyledList>
        <StyledCart>
          <IoBagOutline size='1rem' />
          <span>1</span>
        </StyledCart>
      </StyledNav>
    </Wrapper>
  )
}

export default NavBar
