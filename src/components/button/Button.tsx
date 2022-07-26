import { StyledButton } from './style'
import { BsArrowRight } from 'react-icons/bs'

type ButtonProps = {
  text: string
  transparent: boolean
}

const Button = ({ text, transparent }: ButtonProps) => {
  return (
    <StyledButton className={transparent ? 'transparent' : ''}>
      {text}
      <BsArrowRight style={{ strokeWidth: '1' }} />
    </StyledButton>
  )
}

export default Button
