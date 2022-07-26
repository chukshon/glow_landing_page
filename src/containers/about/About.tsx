import {
  Wrapper,
  StyledDetails,
  StyledContents,
  StyledGrid,
  StyledCol,
  TopImage,
  SideImage,
  StyledStar,
  StyledInner,
} from './style'
import topImageAbout from '../../assets/images/topImageAbout.webp'
import { fadeUp, zoomIn } from '../../utils/variants'

const About = () => {
  return (
    <Wrapper>
      <StyledDetails>
        <StyledContents
          variants={fadeUp}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        >
          <h1 className='h2'>
            The self care brand that's
            <br /> setting a new
            <span>
              &nbsp;standard
              <br /> Clean&nbsp;
            </span>
            products.
          </h1>
          <StyledGrid>
            <StyledCol>
              <h3 className='h3'>
                Where are Products
                <br /> Made
              </h3>
              <p className='p grey_p'>
                Many brands,especially in period
                <br /> care,carry products that take centuries.
              </p>
            </StyledCol>
            <StyledCol>
              <h3 className='h3'>
                Where are Products
                <br /> Made
              </h3>
              <p className='p grey_p'>
                Many brands,especially in period
                <br /> care,carry products that take centuries.
              </p>
            </StyledCol>
          </StyledGrid>
        </StyledContents>
        <SideImage
          variants={zoomIn}
          initial='initial'
          whileInView='whileInView'
          viewport={{ once: true }}
        >
          <img src={topImageAbout} alt='' />
        </SideImage>
      </StyledDetails>
      <TopImage>
        <StyledStar
          animate={{ rotate: 360 }}
          transition={{ ease: 'linear', duration: 5, repeat: Infinity }}
        >
          <StyledInner>
            <h1 style={{ color: 'white' }}>New</h1>
          </StyledInner>
        </StyledStar>
        <img src={topImageAbout} alt='' />
      </TopImage>
    </Wrapper>
  )
}

export default About
