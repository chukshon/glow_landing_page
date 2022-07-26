import { useState } from 'react'
import { Wrapper } from './style'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { accordionDropDown, fadeUp } from '../../utils/variants'
import { AnimatePresence, motion } from 'framer-motion'

type AccordionProps = {
  title: string
  description: string
}
const Accordion = ({ title, description }: AccordionProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  return (
    <Wrapper variants={fadeUp}>
      <div className='title' onClick={() => setShowInfo(!showInfo)}>
        <h3 className='h3'>{title}</h3>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <AnimatePresence>
        {showInfo && (
          <motion.p
            className='p grey_p'
            variants={accordionDropDown}
            initial='initial'
            animate='animate'
            exit='initial'
            viewport={{ once: true }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Accordion
