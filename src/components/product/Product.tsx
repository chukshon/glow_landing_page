import React from 'react'
import { Wrapper, IconGroup, Icons } from './style'
import product1 from '../../assets/images/product1.png'
import { IoBagOutline, IoHeartOutline } from 'react-icons/io5'
import { fadeLeft } from '../../utils/variants'

const Product = () => {
  return (
    <Wrapper variants={fadeLeft}>
      <img src={product1} alt='' />
      <IconGroup>
        <Icons>
          <IoBagOutline />
        </Icons>
        <Icons>
          <IoHeartOutline />
        </Icons>
      </IconGroup>
      <h2>Shower Butter</h2>
      <p>$190.99</p>
    </Wrapper>
  )
}

export default Product
