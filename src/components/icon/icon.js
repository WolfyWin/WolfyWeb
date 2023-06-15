import React from 'react'
import { AnimatedIcon } from '../anim/animated'

const SocialIcon = ({ href, icon, className, hoverText }) => (
  <a href={href} target="_blank" rel="noreferrer" className={className} title={hoverText} >
      <AnimatedIcon icon={icon} />
  </a>
)

const Icon= ({  icon, className, hoverText }) => (
  <a className={className} title={hoverText} >
      <AnimatedIcon icon={icon} />
  </a>
)

export { SocialIcon, Icon }


