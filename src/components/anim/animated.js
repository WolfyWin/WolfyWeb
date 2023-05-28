import React from 'react'
import { useSpring, animated } from 'react-spring'


// Composant pour l'animation de l'icône avec un agrandissement au survol
const AnimatedIcon = ({ icon: Icon }) => {
  const [springProps, setSpringProps] = useSpring(() => ({ scale: 1 }))

  const handleMouseEnter = () => {
    setSpringProps({ scale: 1.3 })
  }

  const handleMouseLeave = () => {
    setSpringProps({ scale: 1 })
  }

  return (
    <animated.span
      style={springProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Icon />
    </animated.span>
  )
}

export { AnimatedIcon }