import { Wrapper, StyledImg, StyledAccordion } from './style'
import faqImg from '../../assets/images/faqImg.png'

import { accordionData } from '../../utils/accordionData'
import Accordion from '../../components/accordion/Accordion'
const Faq = () => {
  return (
    <Wrapper>
      <StyledImg>
        <img src={faqImg} alt='' />
      </StyledImg>
      <StyledAccordion>
        <h1>
          You have <span>questions,</span>
          <br /> we have answers.
        </h1>
        <ul>
          {accordionData.map((accordion) => {
            return <Accordion key={accordion.id} />
          })}
        </ul>
      </StyledAccordion>
    </Wrapper>
  )
}

export default Faq
