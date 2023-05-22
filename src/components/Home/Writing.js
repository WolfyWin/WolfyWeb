import React from 'react'
import Typewriter from 'typewriter-effect'

const Writing = ({ strings = ["Développement", "Design", "Blog"], autoStart = true, loop = true, deleteSpeed = 80 }) => {
  return (
    <Typewriter
      options={{
        strings: strings,
        autoStart: autoStart,
        loop: loop,
        deleteSpeed: deleteSpeed,
      }}
    />
  )
}

export { Writing }
