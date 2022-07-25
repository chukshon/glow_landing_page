import React from 'react'
import Button from '../../components/button/Button'
import Product from '../../components/product/Product'
import { Wrapper, Content } from './style'
import { staggerContainer, fadeUp } from '../../utils/variants'

const Trending = () => {
  const list = [1, 2, 2, 4, 5]
  return (
    <Wrapper
      variants={staggerContainer}
      initial='initial'
      whileInView='whileInView'
    >
      <Content variants={fadeUp} initial='initial' whileInView='whileInView'>
        <h1>
          Trending On <span>Essentials</span>
        </h1>
        <p>
          Made with nature's best ingredients our products'transparent
          ingredient.Fear of God Essentials.
        </p>
        <Button text='Browse All Products' transparent={true} />
      </Content>
      {list.map((product, index) => {
        return <Product key={index} />
      })}
    </Wrapper>
  )
}

export default Trending
