import { Wrapper } from './style'
import partners from '../../assets/images/partners.png'
import { fadeLeft } from '../../utils/variants'
const Partners = () => {
  return (
    <Wrapper variants={fadeLeft} initial='initial' whileInView='whileInView'>
      <img src={partners} alt='' />
    </Wrapper>
  )
}

export default Partners
