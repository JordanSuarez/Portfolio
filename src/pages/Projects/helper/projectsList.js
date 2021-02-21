import {cookMe, projetsDeDev, swapiDashboard, translationChromeExtension} from './logo'
import chromeExtensionImage from 'common/assets/images/chromeExtension.png'
import projetsDeDevImage from 'common/assets/images/projetsDeDev.png'
import swapiImage from 'common/assets/images/swapi.png'

export default [
  {
    id: 1,
    title: 'Projets de dev',
    logo: projetsDeDev,
    description:
      "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
    context: ' Projet de fin de formation',
    imageUrl: projetsDeDevImage,
  },
  {
    id: 2,
    title: 'Translation Chrome extension',
    logo: translationChromeExtension,
    description:
      'Extension google chrome permettant de traduire un mot ou une phrase à la volé, en insérant la traduction apres le mot sélectionné dans la page.',
    context: ' Projet personnel',
    imageUrl: chromeExtensionImage,
  },
  {
    id: 3,
    title: 'Cook-me',
    logo: cookMe,
    description: 'Application de gestion de recette de cuisine',
    context: ' Projet personnel',
    imageUrl: swapiImage,
  },
  {
    id: 4,
    title: 'Swapi dashboard',
    logo: swapiDashboard,
    description:
      "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
    context: ' Projet personnel',
    imageUrl: swapiImage,
  },
]
