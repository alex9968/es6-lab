import React, { useState } from 'react'
import { css } from  '@emotion/core'
import { motion } from 'framer-motion'
//import styled from 'styled-components'
// const StyledSwitch = styled.h1`
// color: hotpink;
// font-size: 20px;

const Switch = () => {
  const [state, setState] = useState(false)

  const handelOnTap = () => {
    console.info("tab", state)
    setState(!state)
  }

  return (
    <motion.div className="container" css={css`
      width: 100px;
      height: 50px;
      position: relative;
      background: whitesmoke;
      border-radius: 50px;
      `}
      onTap={handelOnTap}
    >
      <motion.div className='ball' css={css`
      width: 50px;
      height: 50px;
      background: yellow;
      border-radius: 50%;
      position: absolute;
      left: ${state ? 'unset' : 0};
      right: ${state ?  0 : 'unset'};
      `}
        positionTransition
      >
      </motion.div>
    </motion.div>
  )
}

export default Switch
