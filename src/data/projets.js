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
import { slides } from '../assets/img/slides/index.js'

const projectsData = [
  {
    imgPath: cthulhu,
    title: "Cthulhu Game",
    description: "Cthulhu game est un jeu de Morpion initialement développé en react integré dans Symfony.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
  },
  {
    imgPath: codeheroes,
    title: "Code Heroes",
    description: "Réalisation d'un site e-learning sous forme de RPG en PHP/Symfony.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    tech: [
      TiHtml5,
      SiCsswizardry,
      SiPhp,
      SiSymfony,
      SiMysql,
      SiVisualstudiocode
    ],
    ghLink: "https://github.com/WolfyWin/code_heroes",
    demoLink: "https://codeheroes.skullbot.fr/",
    slides: slides,
    wfLink: "https://drive.google.com/file/d/1dbce5VnAHZO5YmpVWkyTcOHQi9uPTgh4/view?usp=share_link"
  },
  {
    imgPath: veille,
    title: "Sensibilisation à l’accessibilité",
    description: "Présentation et sensibilisation à l'accessibilité web des personnes neuroAtypiques dans le cadre d'une veille technologique.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    demoLink: "https://drive.google.com/file/d/1gsQKqImI4JQN4oT3pb0so32PIR-8Tv-P/view"
  },
  {
    imgPath: autism,
    title: "Journée mondiale de sensibilisation à l'autisme 🧠",
    description: "Rédaction d'un article pour la journée mondiale de sensibilisation à l'autisme.",
    description2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    demoLink: "https://www.alterlms.fr/blog/articles/sensibilisation-tsa/"
  },
]

export { projectsData }