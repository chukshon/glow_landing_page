import React, { useState } from 'react'
import { Wrapper } from './style'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { accordionDropDown, fadeUp } from '../../utils/variants'
import { AnimatePresence, motion } from 'framer-motion'
const Accordion = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  return (
    <Wrapper variants={fadeUp}>
      <div className='title' onClick={() => setShowInfo(!showInfo)}>
        <h3 className='h3'>Where are products made?</h3>
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
          >
            Many brands,especially in period care,carry products that take
            centuries to biodegrade with pronounce.
          </motion.p>
        )}
      </AnimatePresence>
    </Wrapper>
  )
}

export default Accordion
