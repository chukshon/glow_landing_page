import { Wrapper, IconGroup, Icons } from './style'
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5'
import { fadeLeft } from '../../utils/variants'
import { ProductType } from '../../utils/productsData'

const Product = ({ image, name, price }: ProductType) => {
  return (
    <Wrapper variants={fadeLeft} viewport={{ once: true }}>
      <img src={image} alt='' />
      <IconGroup>
        <Icons>
          <IoBagOutline />
        </Icons>
        <Icons>
          <IoHeartOutline />
        </Icons>
      </IconGroup>
      <h2>{name}</h2>
      <p>{price}</p>
    </Wrapper>
  )
}

export default Product
