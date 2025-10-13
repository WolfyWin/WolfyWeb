import codeheroes from '../assets/img/Projects/codeheroes.webp'
import alterlms from '../assets/img/Projects/alterlms.webp'
import cthulhu from '../assets/img/Projects/cthulhu.webp'
import veille from '../assets/img/Projects/veille.webp'
import autism from '../assets/img/Projects/autism.webp'
import ww from '../assets/img/Projects/ww.webp'
import haku from '../assets/img/Projects/haku.webp'
import claro from '../assets/img/Projects/claro.webp'
import leitner from '../assets/img/Projects/leitner.webp'
import flashcard from '../assets/img/Projects/flashcard.webp'

import {
  SiHtml5, SiReact, SiJavascript, SiVisualstudiocode, SiPhpstorm, SiGithub, SiCss3, SiPhp, SiRedux, SiSymfony, SiBootstrap, SiHugo, SiVuedotjs, SiQuasar, SiSass, SiLaravel, SiGit, SiAdminer, SiMariadb,
} from 'react-icons/si'
import {TbSql} from 'react-icons/tb'
import {FcLinux} from 'react-icons/fc'
import { GrMysql } from 'react-icons/gr'

import {codeSlides, alterSlides, tsaSlides, autismSlides, claroSlides, leitnerSlides, flashcardSlides} from '../assets/img/slides'

const projectsData = [
  {
    imgPath: ww,
    title: "WolfyWeb",
    description: "WolfyWeb est mon propre site portfolio, développé avec passion !",
    description2: (
      <div>
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Projet personnel développé afin de créer mon propre site portfolio et de mettre en valeur mon parcours, mes compétences et ma créativité à travers un site à mon image.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Concevoir un portfolio moderne et évolutif pour présenter mes réalisations tout en approfondissant ma maîtrise de <strong>React</strong> et de son écosystème.
        <br />
        Ce projet m’a également permis d’expérimenter la structuration d’une application en composants réutilisables, la gestion de la navigation, et l’optimisation des performances front-end.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Création du site avec <strong>React (Create React App)</strong> et intégration de styles personnalisés.</li>
          <li>Conception du design et de l’identité visuelle sur un thème qui me passionne&nbsp;: <span className="blue">l’espace</span>.</li>
          <li>Développement de composants dynamiques pour les pages <em>Mon parcours</em>, <em>Compétences</em> et <em>Projets</em>.</li>
          <li>Optimisation de l’affichage et adaptation responsive sur différents supports.</li>
        </ul>
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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Projet personnel développé en collaboration avec{" "}
        <a href="https://www.linkedin.com/in/pierre-briffaux-396008151/" target="_blank" rel="noopener noreferrer" className="purple" style={{ fontWeight: "bold", textDecoration: "underline" }}>
          Pierre Briffaux
        </a>, dans le but de concevoir une application complète de gestion personnelle : <span className="purple"><strong>Haku</strong></span>.
        <br />
        Cette application vise à centraliser les outils du quotidien au sein d’un même espace ergonomique et agréable à utiliser.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Développer un <span className="purple"><strong>Personal Management System</strong></span> permettant d’accompagner les utilisateurs dans l’organisation de leur vie quotidienne :
        gestion des listes de tâches et de courses, suivi des dépenses, prise de notes, bien-être, et plus encore.
        <br />
        L’objectif est d’offrir une interface fluide, moderne et personnalisable, capable d’unifier productivité et sérénité.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Conception de l’architecture du projet et définition des modules principaux (agenda, finances, notes, bien-être).</li>
          <li>Développement du frontend avec <span className="purple"><strong>Vue.js</strong></span> et le <span className="purple"><strong>framework Quasar</strong></span> pour une interface réactive et moderne.</li>
          <li>Implémentation du backend avec <span className="purple"><strong>Laravel (PHP)</strong></span> pour la gestion des données et l’API REST.</li>
          <li>Collaboration active avec <span className="purple"><strong>Pierre Briffaux</strong></span> sur la structure, la logique métier et les choix techniques.</li>
          <li>Travail en cours sur la persistance des données, la personnalisation utilisateur et l’optimisation UX/UI.</li>
        </ul>
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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        <p>
          <strong>Claroline</strong>, c’est une petite équipe avec une grande idée&nbsp;: rendre l’apprentissage plus libre, humain et collaboratif.
          Cette plateforme <strong>open source (LMS)</strong> favorise l’autonomie, l’intelligence collective et permet de créer des espaces où formateurs et apprenants construisent ensemble.
        </p>
        <p>
          J’y ai travaillé pendant près de deux ans en tant que <strong>développeuse web fullstack</strong>, au sein d’un environnement bienveillant et stimulant, qui laissait une grande place à l’initiative, à la pédagogie et au travail d’équipe.
        </p>
        <br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif</h3>
        <p>
          Contribuer activement à l’évolution de la plateforme <span className="purple"><strong>Claroline Connect</strong></span>, en participant au développement de nouvelles fonctionnalités, à l’amélioration de l’interface et à la maintenance du cœur applicatif.
          L’objectif global était d’enrichir l’expérience utilisateur tout en renforçant la stabilité et la modularité du système.
        </p>
        <br />

        <h3 className="project-desc-title blue my-3">💡 Ce que j’en retiens</h3>
        <ul>
          <li>
            <strong>Ce que j’ai aimé&nbsp;:</strong> une vision profondément humaine de la technologie, une éthique open source accessible à tous, et une passion réelle pour l’éducation et la transmission.
          </li>
          <li>
            <strong>Mon expérience&nbsp;:</strong> deux années marquées par la confiance, l’autonomie, la pédagogie et la collaboration au sein d’une équipe soudée et inspirante.
          </li>
        </ul>
        <p>
          Travailler chez <span className="purple"><strong>Claroline</strong></span>, c’était faire partie d’un projet qui a du cœur et du sens.
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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        <span className="purple"><strong>Cthulhu Game</strong></span> est un mini-jeu de morpion développé dans le cadre d’un projet d’apprentissage personnel, combinant <span className="purple"><strong>React</strong></span> et <span className="purple"><strong>Symfony</strong></span>.
        <br />
        L’idée était d’expérimenter la communication entre un frontend moderne en React et un backend Symfony, tout en explorant les fondamentaux de la logique applicative côté client.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Comprendre et mettre en pratique les concepts essentiels de <span className="purple"><strong>React</strong></span> et <span className="purple"><strong>Redux</strong></span>.
        Gestion d’état, passage de props, composants réutilisables et utilisation des <span className="purple"><strong>hooks</strong></span>.
        <br />
        Le jeu a également servi de support pour tester la structure d’un projet React intégré dans un environnement Symfony, avec gestion de routes et communication avec une base de données.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Développement du jeu de morpion complet avec logique de victoire, d’égalité et de redémarrage.</li>
          <li>Implémentation de la gestion d’état avec <span className="purple"><strong>Redux</strong></span> pour centraliser les données du jeu.</li>
          <li>Création d’un <span className="purple"><strong>tableau des scores</strong></span> affichant les joueurs, le nombre de victoires, de parties jouées et la dernière activité.</li>
          <li>Ajout d’un <span className="purple"><strong>podium</strong></span> pour mettre en avant les trois meilleurs joueurs.</li>
          <li>Intégration du projet React dans une application <span className="purple"><strong>Symfony</strong></span> avec gestion des routes et de la persistance des scores.</li>
        </ul>
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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Réalisation d'un site vitrine pour AlterLMS en collaboration avec{" "}<a href="https://noelle-monge.fr/" target="_blank" rel="noopener noreferrer" className="purple" style={{ fontWeight: "bold", textDecoration: "underline" }}>Noëlle Monge</a>.
        <br />
        Ce projet avait pour objectif de mettre en avant la solution LMS <span className="purple"><strong>AlterLMS</strong></span> à travers un site clair, rapide et facilement maintenable.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Concevoir un site vitrine sobre et efficace, destiné à présenter les fonctionnalités et les valeurs d’<strong>AlterLMS</strong> tout en restant accessible à des utilisateurs non techniques.
        <br />
        L’accent a été mis sur la simplicité d’administration, les performances et la facilité de déploiement grâce à la génération statique.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Conception et intégration du site avec <span className="purple"><strong>HTML, CSS et JavaScript</strong></span>.</li>
          <li>Utilisation du framework <span className="purple"><strong>Bootstrap</strong></span> pour assurer la compatibilité responsive et une mise en page cohérente.</li>
          <li>Génération du site via le générateur statique <span className="purple"><strong>Hugo</strong></span> pour garantir rapidité et maintenance simplifiée.</li>
          <li>Travail sur le design et le contenu.</li>
          <li>Optimisation du rendu et des performances pour un affichage fluide sur tous les supports.</li>
        </ul>

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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        <span className="purple"><strong>Code Heroes</strong></span> est un projet réalisé dans le cadre de ma formation à la <span className="purple"><strong>Wild Code School</strong></span>.
        <br />
        L’objectif était de concevoir un site d’e-learning sous forme de <span className="purple"><strong>RPG</strong></span>, mêlant apprentissage du code et progression ludique.
        <br />
        J’ai développé ce projet seule sur une période d’environ deux semaines, en mettant l’accent sur la logique de jeu et la structuration backend.

        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Créer une plateforme d’apprentissage interactive qui transpose les mécaniques d’un jeu de rôle dans un environnement éducatif.
        <br />
        L’objectif était de renforcer la motivation et la régularité des apprenants en rendant la progression visible et gratifiante, tout en consolidant mes compétences en <span className="purple"><strong>PHP</strong></span> et <span className="purple"><strong>Symfony</strong></span>.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Conception et développement du site en <span className="purple"><strong>PHP / Symfony</strong></span>.</li>
          <li>Implémentation de mécaniques de jeu inspirées des RPG (progression, niveaux, quêtes).</li>
          <li>Création du <span className="purple"><strong>design et du CSS from scratch</strong></span>, sans utilisation de framework externe.</li>
          <li>Intégration de fonctionnalités d’apprentissage progressif et de suivi des utilisateurs.</li>
          <li>Préparation des bases pour de futures évolutions et fonctionnalités supplémentaires.</li>
        </ul>
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
]

const otherProjectsData = [
  {
    imgPath: veille,
    title: "Accessibilité",
    description: "Sensibilisation à l'accessibilité web des personnes neuroAtypiques dans le cadre d'une veille technologique.",
    description2:(
      <div>
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Projet réalisé dans le cadre d’une <span className="purple"><strong>veille technologique</strong></span>durant ma formation à la <span className="purple"><strong>Wild Code School</strong></span>, puis présenté aux autres développeurs.
        <br />
        Il s’agissait d’une initiative personnelle visant à explorer un sujet souvent négligé dans le domaine du web&nbsp;: l’<span className="purple"><strong>accessibilité numérique</strong></span> pour les personnes <span className="purple"><strong>neuroatypiques</strong></span>.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Sensibiliser les développeurs à l’importance de l’accessibilité web pour tous les profils d’utilisateurs, notamment ceux présentant des différences cognitives, sensorielles ou attentionnelles.
        <br />
        L’objectif était d’encourager une approche plus empathique et inclusive du développement web, en démontrant que l’accessibilité ne se limite pas aux contraintes techniques mais touche directement à l’expérience humaine.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Recherche sur les problématiques d’accessibilité propres aux personnes neuroatypiques (autisme, TDAH, etc.).</li>
          <li>Préparation et animation d’une présentation destinée aux autres apprenants de la Wild Code School.</li>
          <li>Création de supports clairs et concrets pour illustrer les bonnes pratiques d’accessibilité.</li>
          <li>Analyse des principaux obstacles rencontrés par les utilisateurs et propositions de solutions simples à mettre en œuvre.</li>
          <li>Promotion d’une culture du <span className="purple"><strong>web inclusif</strong></span> et de la <span className="purple"><strong>conception empathique</strong></span> dans le développement web.</li>
        </ul>
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
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Projet réalisé dans le cadre de la <span className="purple"><strong>Journée mondiale de sensibilisation à l’autisme</strong></span>, pour le site d’<span className="purple"><strong>AlterLMS</strong></span>.
        <br />
        J’ai rédigé un article destiné à sensibiliser le public et les professionnels du numérique à la réalité des personnes autistes, en valorisant une approche bienveillante et inclusive.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Fournir une information à la fois <span className="purple"><strong>précise</strong></span> et <span className="purple"><strong>empathique</strong></span>, afin de déconstruire les idées reçues sur l’autisme et d’encourager une meilleure compréhension dans le monde du travail, particulièrement dans le domaine de la <span className="purple"><strong>tech</strong></span>.
        <br />
        L’objectif était aussi de rappeler que la sensibilisation passe par l’écoute, le respect et l’adaptation aux différences cognitives et sensorielles de chacun.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Rédaction d’un article de sensibilisation publié sur le site d’<span className="purple"><strong>AlterLMS</strong></span>.</li>
          <li>Recherche de sources fiables pour garantir une information juste et nuancée.</li>
          <li>Adaptation du ton et du vocabulaire pour une lecture fluide et accessible à tous.</li>
          <li>Mise en avant de la <span className="purple"><strong>neurodiversité</strong></span> comme richesse dans les équipes de développement et le secteur numérique.</li>
          <li>Contribution à la promotion d’une culture plus inclusive et respectueuse dans la tech.</li>
        </ul>
      </div>
    ),
    slides: autismSlides
  },
  {
    imgPath: leitner,
    title: "Système Leitner",
    description: "Étude et présentation du système de Leitner afin de concevoir un algorithme de révision espacée pour l’outil Flashcards.",
    description2: (
      <div>
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
         Projet réalisé dans le cadre de mon poste de développeuse web fullstack chez{" "} <a href="https://www.claroline.com/" target="_blank" rel="noopener noreferrer" className="purple" style={{ fontWeight: "bold", textDecoration: "underline" }}>Claroline</a>.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Avant de développer un nouvel outil appelé <span className="purple"><strong>Flashcards</strong></span>, j’ai été chargée de mener une recherche approfondie
        sur la <span className="purple"><strong>méthode de Leitner</strong></span>, un système de révision espacée visant à optimiser la mémorisation à long terme.
        <br />
        L’objectif était de comprendre en détail son fonctionnement afin de concevoir un <span className="purple"><strong>algorithme adapté</strong></span> à notre
        notre futur outil et de présenter le concept à l’équipe de manière claire et pédagogique.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Recherche et analyse du fonctionnement de la méthode de Leitner (organisation en boîtes, intervalles de révision, logique de déplacement des cartes).</li>
          <li>Création d’une présentation (slides) destinée à l’équipe de développement.</li>
          <li>Préparation de la phase d’intégration de l’algorithme dans le nouvel outil d’apprentissage <span className="purple"><strong>Flashcards</strong></span>, que j’ai ensuite développée.</li>
        </ul>
      </div>
    ),
    slides: leitnerSlides,
  },
  {
    imgPath: flashcard,
    title: "Flashcards",
    description: "Conception et développement complet de l'outil Flashcards, basé sur la méthode de révision Leitner.",
    description2: (
      <div>
        <h3 className="project-desc-title blue my-3">💼 Contexte</h3>
        Projet réalisé dans le cadre de mon poste de développeuse web fullstack chez{" "} <a href="https://www.claroline.com/" target="_blank" rel="noopener noreferrer" className="purple" style={{ fontWeight: "bold", textDecoration: "underline" }}>Claroline</a>.
        <br /><br />

        <h3 className="project-desc-title blue my-3">🎯 Objectif du projet</h3>
        Suite à l’étude et à la présentation du <span className="purple"><strong>système de Leitner</strong></span>, j’ai été chargée de concevoir et de développer entièrement un nouvel outil d’apprentissage interactif basé sur ce principe :  <span className="purple"><strong>Flashcards</strong></span>.
        <br />
        L’objectif était de permettre aux utilisateurs de créer, réviser et suivre leurs cartes de mémorisation, tout en intégrant un système de progression intelligente inspiré de la <span className="purple"><strong>méthode de Leitner</strong></span>.
        <br /><br />

        <h3 className="project-desc-title blue my-3">💻 Missions réalisées</h3>
        <ul>
          <li>Conception fonctionnelle de l’outil à partir du modèle Leitner étudié précédemment.</li>
          <li>Développement complet de l’outil, du backend au frontend.</li>
          <li>Création d’une interface utilisateur intuitive, centrée sur la simplicité d’usage et la motivation à apprendre.</li>
        </ul>
      </div>
    ),
    tech: [
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiRedux, name: "Redux", color: "#764ABC" },
      { Icon: SiSass, name: "Sass", color: "#CC6699" },
      { Icon: SiPhp, name: "PHP", color: "#8993be" },
      { Icon: SiSymfony, name: "Symfony" },
      { Icon: GrMysql, name: "MySQL", color: "#4479a1" },
      { Icon: FcLinux, name: "Linux" },
      { Icon: SiGithub, name: "GitHub", color: "#6170c2" },
      { Icon: SiGit, name: "Git", color: "#F05032" },
      { Icon: SiPhpstorm, name: "PhpStorm", color: "#ef32a2" }
    ],
    slides: flashcardSlides,
  },
]

export { projectsData, otherProjectsData }
