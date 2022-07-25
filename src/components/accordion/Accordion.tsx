import React, { useState } from 'react'
import { Wrapper } from './style'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { fadeUp } from '../../utils/variants'

const Accordion = () => {
  const [showInfo, setShowInfo] = useState<boolean>(false)
  return (
    <Wrapper variants={fadeUp}>
      <div className='title' onClick={() => setShowInfo(!showInfo)}>
        <h3>Where are products made?</h3>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      {showInfo && (
        <p>
          Many brands,especially in period care,carry products that take
          centuries to biodegrade with pronounce.
        </p>
      )}
    </Wrapper>
  )
}

export default Accordion
