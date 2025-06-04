import React, { useState }from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiHtml5, SiReact, SiGit, SiAdminer, SiMariadb, SiSass, SiLess, SiJavascript, SiWindows, SiVisualstudiocode, SiPhpstorm, SiGithub, SiCss3,
  SiPhp, SiRedux, SiSymfony, SiLaravel, SiBootstrap, SiHugo, SiVuedotjs, SiQuasar
} from 'react-icons/si'
import { FcLinux } from 'react-icons/fc'
import { GrMysql } from 'react-icons/gr'
import { TbSql } from 'react-icons/tb'

const techs = [
  { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
  { Icon: SiPhp, name: "PHP", color: "#8993be" },
  { Icon: SiSymfony, name: "Symfony"},
  { Icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
  { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
  { Icon: SiReact, name: "React", color: "#61DAFB" },
  { Icon: SiRedux, name: "Redux", color: "#764ABC" },
  { Icon: SiGit, name: "Git", color: "#F05032" },
  { Icon: SiHugo, name: "Hugo", color: "#FF4088" },
  { Icon: GrMysql, name: "MySQL", color: "#00758f" },
  { Icon: TbSql, name: "SQL", color: "#F29111" },
  { Icon: SiAdminer, name: "Adminer", color: "#E5D85C" },
  { Icon: SiMariadb, name: "Mariadb", color: "#c1775a" },
  { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
  { Icon: SiSass, name: "Sass", color: "#CC6699" },
  { Icon: SiLess, name: "Less", color: "#1D365D" },
  { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { Icon: SiQuasar, name: "Quasar", color: "#00b4ff" },
]

const tools = [
  { Icon: FcLinux, name: "Linux" },
  { Icon: SiWindows, name: "Windows", color: "#0078D6" },
  { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" },
  { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
  { Icon: SiVisualstudiocode, name: "Visual Studio Code", color: "#007ACC" }
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
          <div className="pb-3" data-aos="fade-up" onTouchStart={() => handleTouch(item.name)} onMouseEnter={() => setTooltip(item.name)} onMouseLeave={() => setTooltip(null)}>
            <item.Icon color={item.color} />
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
