import codeheroes from '../assets/img/Projects/codeheroes.png'
import alterlms from '../assets/img/Projects/alterlms.png'
import cthulhu from '../assets/img/Projects/cthulhu.png'
import veille from '../assets/img/Projects/veille.png'
import autism from '../assets/img/Projects/autism.png'
import { 
  TiHtml5,
  SiCsswizardry,
  SiPhp,
  SiSymfony,
  DiJavascript1,
  DiReact,
  SiRedux,
  SiHugo,
  SiMysql,
  SiBootstrap,
  SiVisualstudiocode
} from '../data/stack.js'
import { codeSlides, alterSlides } from '../assets/img/slides'


const projectsData = [
  {
    imgPath: cthulhu,
    title: "Cthulhu Game",
    description: "Cthulhu game est un jeu de Morpion initialement développé en react integré dans Symfony.",
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
      DiJavascript1,
      DiReact,
      SiRedux,
      TiHtml5,
      SiCsswizardry,
      SiPhp,
      SiSymfony,
      SiMysql,
      SiVisualstudiocode
    ],
    ghLink: "https://github.com/WolfyWin/Cthulhu_game",
    demoLink: "",
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
      SiHugo,
      TiHtml5,
      SiCsswizardry,
      SiBootstrap,
      DiJavascript1,
      SiVisualstudiocode
    ],
    ghLink: "https://github.com/alterlms/site",
    demoLink: "https://www.alterlms.fr/",
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
      TiHtml5,
      SiCsswizardry,
      SiPhp,
      SiSymfony,
      SiMysql,
      SiVisualstudiocode
    ],
    ghLink: "https://github.com/WolfyWin/code_heroes",
    demoLink: "https://codeheroes.wolfyweb.fr/",
    slides: codeSlides,
    wfLink: "https://drive.google.com/file/d/1dbce5VnAHZO5YmpVWkyTcOHQi9uPTgh4/view?usp=share_link"
  },
  {
    imgPath: veille,
    title: "Sensibilisation à l’accessibilité",
    description: "Présentation et sensibilisation à l'accessibilité web des personnes neuroAtypiques dans le cadre d'une veille technologique.",
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
    demoLink: "https://drive.google.com/file/d/1gsQKqImI4JQN4oT3pb0so32PIR-8Tv-P/view"
  },
  {
    imgPath: autism,
    title: "Journée mondiale de sensibilisation à l'autisme",
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
