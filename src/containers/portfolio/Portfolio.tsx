import React from 'react'
import PortfolioCard from '../../components/portfolioCard/PortfolioCard'
import { Wrapper } from './style'

const Portfolio = () => {
  const array = [1, 2, 3, 4]
  return (
    <Wrapper>
      {array.map((e, i) => {
        return <PortfolioCard key={i} />
      })}
    </Wrapper>
  )
}

export default Portfolio
