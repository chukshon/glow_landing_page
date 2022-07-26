import {
  Wrapper,
  FooterGrid,
  ContactCol,
  QuickLinks,
  FooterLogo,
  SocialLinks,
  Subscribe,
  StyledForm,
  Copyright,
} from './style'

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import { fadeUp, staggerContainer } from '../../utils/variants'

const Footer = () => {
  return (
    <Wrapper>
      <FooterGrid
        variants={staggerContainer}
        initial='initial'
        whileInView='whileInView'
      >
        <ContactCol variants={fadeUp}>
          <FooterLogo>
            <h1>
              Glow<span></span>
            </h1>
          </FooterLogo>
          <p>
            Keep Up With Our New Releases, Beauty Tips And What Emma's Been Up
            To.
          </p>
          <SocialLinks>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </SocialLinks>
        </ContactCol>
        <QuickLinks variants={fadeUp}>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
        </QuickLinks>
        <QuickLinks variants={fadeUp}>
          <h3>Resources</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
        </QuickLinks>
        <QuickLinks variants={fadeUp}>
          <h3>Terms &amp; Condition</h3>
          <ul>
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
        </QuickLinks>
        <Subscribe variants={fadeUp}>
          <h3>Subscribe</h3>
          <p>Get 10% off your first order</p>
          <StyledForm>
            <input type='text' placeholder='Enter your Email' />
            <button type='submit'>
              <FiSend />
            </button>
          </StyledForm>
        </Subscribe>
      </FooterGrid>
      <Copyright>
        <p>Copyright © 2022 Musemind | All rights reserved.</p>
      </Copyright>
    </Wrapper>
  )
}

export default Footer
