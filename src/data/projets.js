import codeheroes from '../assets/img/Projects/codeheroes.webp'
import alterlms from '../assets/img/Projects/alterlms.webp'
import cthulhu from '../assets/img/Projects/cthulhu.webp'
import veille from '../assets/img/Projects/veille.webp'
import autism from '../assets/img/Projects/autism.webp'
import ww from '../assets/img/Projects/ww.webp'
import haku from '../assets/img/Projects/haku.webp'
import claro from '../assets/img/Projects/claro.webp'

import {
  SiHtml5, SiReact, SiJavascript, SiVisualstudiocode, SiPhpstorm, SiGithub, SiCss3, SiPhp, SiRedux, SiSymfony, SiBootstrap, SiHugo, SiVuedotjs, SiQuasar, SiSass, SiLaravel, SiGit, SiAdminer, SiMariadb,
} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'
import {FcLinux} from 'react-icons/fc'
import { GrMysql } from 'react-icons/gr'

import { codeSlides, alterSlides, tsaSlides, claroSlides } from '../assets/img/slides'

const projectsData = [
  {
    imgPath: ww,
    title: "WolfyWeb",
    description: "WolfyWeb est mon propre site portfolio, développé avec passion !",
    description2: (
      <div>
        Création et développement de mon propre site portfolio.
        <br />
        J'ai utilisé react create app pour le développer afin de me familiariser avec React.
        <br />
        Le design est entièrement réalisé par mes soins et sur un thème qui me passionne : l'<span className="blue">espace</span>.
      </div>
    ),
    tech: [
      { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiVisualstudiocode, name: "Visual Studio Code", color: "#007ACC" },
      { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" }
    ],
    ghLink: "https://github.com/WolfyWin/WolfyWeb",
    demoLink: "",
  },
  {
    imgPath: haku,
    title: "Haku",
    description: "Haku est un personal Management system encore en cours de développement.",
    description2: (
      <div>
        Le projet "Haku App" est un Personal Management System, une application d'accompagnement aux taches du quotidien, comme les listes de courses, de choses à faire, de gestion des dépenses ou encore du bien-être.
        <br />
        Il est réalisé en Vue.js (quasar framework), PHP, Laravel et encore en cours de développement.
        <br />
        Haku est developpé en collaboration avec <a href="https://www.linkedin.com/in/pierre-briffaux-396008151/" target="_blank" rel="noopener noreferrer" className="purple">Pierre Briffaux</a>.
        <br />
      </div>
    ),
    tech: [
      { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiPhp, name: "PHP", color: "#8993be" },
      { Icon: SiSass, name: "Sass", color: "#CC6699" },
      { Icon: GrMysql, name: "MySQL", color: "#4479a1" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" },
      { Icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
      { Icon: SiQuasar, name: "Quasar", color: "#00b4ff" },
      { Icon: SiLaravel, name: "Laravel", color: "#FF2D20" },
    ],
    demoLink: "https://haku-app.wolfyweb.fr",
  },
  {
    imgPath: claro,
    title: "Claroline",
    description: "Claroline est une plateforme LMS open source pensée pour l'apprentissage collaboratif et sur-mesure.",
    description2: (
      <div>
        <p>
          <strong>Claroline</strong>, c'est une petite équipe avec une grande idée : rendre l'apprentissage plus libre, humain et collaboratif.
          Cette plateforme open source (LMS) favorise l'autonomie, l'intelligence collective et permet de créer des espaces où formateurs et apprenants construisent ensemble.
        </p>
        <ul>
          <li>
            <strong>Ce que j'ai aimé&nbsp;:</strong> Vision centrée sur l'humain, éthique open source accessible à tous, et vraie passion pour l'éducation.
          </li>
          <li>
            <strong>Mon expérience&nbsp;:</strong> Deux ans comme développeuse fullstack dans un cadre rare avec confiance, initiative, pédagogie engagée, équipe soudée.
          </li>
        </ul>
        <p>
          Travailler chez Claroline, c'était faire partie d'un projet qui a du cœur et du sens.
        </p>
      </div>
    ),
    tech: [
      { Icon: SiPhp, name: "PHP", color: "#8993be" },
      { Icon: SiSymfony, name: "Symfony" },
      { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiRedux, name: "Redux", color: "#764ABC" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiSass, name: "Sass", color: "#CC6699" },
      { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { Icon: TbSql, name: "SQL", color: "#F29111" },
      { Icon: GrMysql, name: "MySQL", color: "#4479a1" },
      { Icon: SiMariadb, name: "Mariadb", color: "#c1775a" },
      { Icon: SiAdminer, name: "Adminer", color: "#E5D85C" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" },
      { Icon: FcLinux, name: "Linux" },
    ],
    ghLink: "https://github.com/claroline/Claroline",
    demoLink: "https://www.claroline.com/",
    slides: claroSlides,
  },
  {
    imgPath: cthulhu,
    title: "Cthulhu Game",
    description: "Cthulhu game est un jeu de Morpion développé en react et intégré dans Symfony.",
    description2: (
      <div>
        Le projet "Cthulhu Game" est un jeu de morpion créé en utilisant React et intégré dans une application Symfony.
        <br />
        L'objectif était de comprendre et d'appliquer les concepts fondamentaux de React et Redux, y compris la gestion d'état, les props et les composants, ainsi que l'utilisation de hooks. 
        <br />
        <br />
        Le jeu comprend également un tableau des scores, accessible par une nouvelle route, qui affiche les joueurs avec le nombre de parties gagnées, le nombre de parties jouées et la date de la dernière activité.
        <br />
        Un podium met en valeur les trois meilleurs joueurs.
      </div>
    ),
    tech: [
      { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiRedux, name: "Redux", color: "#764ABC" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiPhp, name: "PHP", color: "#8993be" },
      { Icon: SiSymfony, name: "Symfony" },
      { Icon: GrMysql, name: "MySQL", color: "#4479a1" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" }
    ],
    ghLink: "https://github.com/WolfyWin/Cthulhu_game",
    demoLink: "https://cthulhu-game.wolfyweb.fr",
  },
  {
    imgPath: alterlms,
    title: "AlterLMS",
    description: "Le site d'AlterLMS est un site statique généré à l'aide de hugo dans le but de présenter l'entreprise et ses services.",
    description2: (
      <div>
        Réalisation d'un site vitrine pour AlterLMS en collaboration avec <a href="https://noelle-monge.fr/" target="_blank" rel="noopener noreferrer" className="purple">Noëlle Monge</a>.
        <br />
        Le site est réalisé en HTML/CSS/JS avec le framework Bootstrap.
        <br />
        Le site est généré à l'aide de Hugo.
        <br />
        Il fallait miser sur la simplicité et l'efficacité afin de le rendre utilisable par des personnes non techniques.
      </div>
    ),
    tech: [
      { Icon: SiHugo, name: "Hugo", color: "#FF4088" },
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiBootstrap, name: "Bootstrap", color: "#7952B3" },
      { Icon: SiJavascript, name: "Javascript", color: "#f0dc4e" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiVisualstudiocode, name: "Visual Studio Code", color: "#007ACC" }
    ],
    ghLink: "https://github.com/alterlms/site",
    slides: alterSlides,
  },
  {
    imgPath: codeheroes,
    title: "Code Heroes",
    description: "Réalisation d'un site e-learning sous forme de RPG en PHP/Symfony.",
    description2: (
      <div>
        Réalisation d'un site e-learning sous forme de RPG en PHP/Symfony dans le cadre de ma formation à la Wild Code School.
        <br />
        Il a été réalisé seule en 2 semaines environs.
        <br />
        Je n'ai pas utilisé bootstrap pour ce projet, j'ai réalisé le CSS from scratch.
        <br />
        Ce project va évoluer au fur et à mesure de ma progression.
      </div>
    ),
    tech: [
      { Icon: SiHtml5, name: "HTML5", color: "#E34F26" },
      { Icon: SiCss3, name: "CSS3", color: "#214ce5" },
      { Icon: SiPhp, name: "PHP", color: "#8993be" },
      { Icon: SiSymfony, name: "Symfony" },
      { Icon: GrMysql, name: "MySQL", color: "#4479a1" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiVisualstudiocode, name: "Visual Studio Code", color: "#007ACC" }
    ],
    ghLink: "https://github.com/WolfyWin/code_heroes",
    demoLink: "https://codeheroes.wolfyweb.fr/",
    slides: codeSlides,
    wfLink: "https://drive.google.com/file/d/1dbce5VnAHZO5YmpVWkyTcOHQi9uPTgh4/view?usp=share_link"
  },
  {
    imgPath: veille,
    title: "Accessibilité",
    description: "Sensibilisation à l'accessibilité web des personnes neuroAtypiques dans le cadre d'une veille technologique.",
    description2:(
      <div>
        Ce projet est une initiative réalisée dans le cadre d'une veille technologique lors de ma formation à la Wild Code School et présenté aux autres développeurs. 
        <br />
        L'objectif principal était de présenter et sensibiliser à l'accessibilité web des personnes neuroatypiques.
        <br />
        J'ai cherché à favoriser une plus grande compréhension et une plus grande prise en compte de ces questions d'accessibilité dans leurs travaux futurs. 
        <br />
        Ce projet a ainsi permis de souligner l'importance de l'empathie et de la considération pour tous les utilisateurs dans la conception et le développement.
      </div>
    ),
    demoLink: "https://drive.google.com/file/d/1gsQKqImI4JQN4oT3pb0so32PIR-8Tv-P/view",
    slides: tsaSlides
  },
  {
    imgPath: autism,
    title: "Autisme",
    description: "Rédaction d'un article pour la journée mondiale de sensibilisation à l'autisme.",
    description2: (
      <div>
        Dans le cadre de la Journée mondiale de sensibilisation à l'autisme, j'ai rédigé un article pour le site d'AlterLMS. 
        <br />
        L'objectif était de fournir une information précise et empathique, tout en mettant l'accent sur l'importance de la sensibilisation et de l'acceptation surout dans le domaine de la tech.
      </div>
    ),
    demoLink: "https://www.alterlms.fr/blog/articles/sensibilisation-tsa/"
  },
]

export { projectsData }
