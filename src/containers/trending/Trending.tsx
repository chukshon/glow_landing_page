import React from 'react'
import Button from '../../components/button/Button'
import Product from '../../components/product/Product'
import { Wrapper } from './style'

const Trending = () => {
  const list = [1, 2, 2, 4, 5]
  return (
    <Wrapper>
      <div className='content'>
        <h1>
          Trending On <span>Essentials</span>
        </h1>
        <p>
          Made with nature's best ingredients our products'transparent
          ingredient.Fear of God Essentials.
        </p>
        <Button text='Browse All Products' transparent={true} />
      </div>
      {list.map((product, index) => {
        return <Product key={index} />
      })}
    </Wrapper>
  )
}

export default Trending
