import { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import myAvatar from '../../Assets/img/avatar.png'

function MyAvatar() {
  const [isHovered, setIsHovered] = useState(false)
  
  const { transform } = useSpring({

    transform: isHovered ? `scale(1.2)` : `scale(1)`,
    config: { mass: 1, tension: 170, friction: 26 }

  })

  return (

    <animated.img
      src={myAvatar}
      className="img-fluid avatar"
      alt="avatar"
      style={{ transform }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />

  )
}

export { MyAvatar }
