import React, { useState }from 'react'
import { Col, Row } from 'react-bootstrap'
import { 
  TiHtml5,
  SiCsswizardry,
  SiPhp, SiSymfony,
  DiJavascript1,
  DiReact,
  SiRedux,
  DiGit,
  SiHugo,
  SiMysql,
  SiBootstrap,
  DiSass,
  DiLess,
  SiLinux,
  SiWindows,
  SiVisualstudiocode,
  SiPhpstorm,
  SiGithub
} from '../../data/stack.js'

const techs = [
  { Icon: TiHtml5, name: "HTML5" },
  { Icon: SiCsswizardry, name: "CSS3" },
  { Icon: SiPhp, name: "PHP" },
  { Icon: SiSymfony, name: "Symfony" },
  { Icon: DiJavascript1, name: "Javascript" },
  { Icon: DiReact, name: "React" },
  { Icon: SiRedux, name: "Redux" },
  { Icon: DiGit, name: "Git" },
  { Icon: SiHugo, name: "Hugo" },
  { Icon: SiMysql, name: "MySQL" },
  { Icon: SiBootstrap, name: "Bootstrap" },
  { Icon: DiSass, name: "Sass" },
  { Icon: DiLess, name: "Less" }
]

const tools = [
  { Icon: SiLinux, name: "Linux" },
  { Icon: SiWindows, name: "Windows" },
  { Icon: SiVisualstudiocode, name: "Visual Studio Code" },
  { Icon: SiPhpstorm, name: "PhpStorm" },
  { Icon: SiGithub, name: "GitHub" }
]

const Stack = ({items}) => {
  const [tooltip, setTooltip] = useState(null)

  const handleTouch = (name) => {
    setTooltip(name)
    setTimeout(() => setTooltip(null), 3000)
  }

  return (
    <Row className="tech-stack-container">
      {items.map((item, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div data-aos="fade-up" onTouchStart={() => handleTouch(item.name)} onMouseEnter={() => setTooltip(item.name)} onMouseLeave={() => setTooltip(null)}>
            <item.Icon />
            {tooltip === item.name && 
              <div className="tooltip">
                <h3>{item.name}</h3>
              </div>
            }
          </div>
        </Col>
      ))}
    </Row>
  )
}

export const Techstack = () => <Stack items={techs} />
export const Toolstack = () => <Stack items={tools} />
export default Stack
