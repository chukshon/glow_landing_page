import bodyOil from '../assets/images/bodyOil.png'
import bodyOilGel from '../assets/images/bodyOilGel.png'
import sunriseShampoo from '../assets/images/sunriseShampoo.png'
import product1 from '../assets/images/product1.png'

export type ProductType = {
  name: string
  price: string
  image: string
}

export const productsData: ProductType[] = [
  {
    name: 'Shower Butter',
    price: '$190.99',
    image: product1,
  },
  {
    name: 'Shower Butter',
    price: '$190.99',
    image: bodyOil,
  },
  {
    name: 'Shower Butter',
    price: '$190.99',
    image: bodyOilGel,
  },
  {
    name: 'Shower Butter',
    price: '$190.99',
    image: sunriseShampoo,
  },
  {
    name: 'Shower Butter',
    price: '$190.99',
    image: sunriseShampoo,
  },
]
