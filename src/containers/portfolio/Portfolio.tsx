import React from 'react'
import PortfolioCard from '../../components/portfolioCard/PortfolioCard'
import { staggerContainer } from '../../utils/variants'
import { Wrapper } from './style'

const Portfolio = () => {
  const array = [1, 2, 3, 4]
  return (
    <Wrapper
      variants={staggerContainer}
      initial='initial'
      whileInView='whileInView'
    >
      {array.map((e, i) => {
        return <PortfolioCard key={i} />
      })}
    </Wrapper>
  )
}

export default Portfolio
