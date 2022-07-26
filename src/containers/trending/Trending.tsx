import Button from '../../components/button/Button'
import Product from '../../components/product/Product'
import { Wrapper, Content } from './style'
import { staggerContainer, fadeUp } from '../../utils/variants'
import { productsData } from '../../utils/productsData'

const Trending = () => {
  return (
    <Wrapper
      variants={staggerContainer}
      initial='initial'
      whileInView='whileInView'
      viewport={{ once: true }}
    >
      <Content variants={fadeUp} initial='initial' whileInView='whileInView'>
        <h2 className='h2'>
          Trending On <span>Essentials</span>
        </h2>
        <p className='p grey_p'>
          Made with nature's best ingredients our products'transparent
          ingredient.Fear of God Essentials.
        </p>
        <Button text='Browse All Products' transparent={true} />
      </Content>
      {productsData.map((product, index) => {
        return <Product key={index} {...product} />
      })}
    </Wrapper>
  )
}

export default Trending
