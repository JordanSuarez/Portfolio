import {cookMe, projetsDeDev, swapiDashboard, translationChromeExtension} from './logos'
import chromeExtensionImage from 'common/assets/images/chromeExtension.png'
import projetsDeDevImage from 'common/assets/images/projetsDeDev.png'
import swapiImage from 'common/assets/images/swapi.png'

export default [
  {
    id: 1,
    title: 'Projets de dev',
    logos: projetsDeDev,
    description:
      "Plateforme collaborative développé entièrement en Javascript. Elle permet l'hébergement, le partage et la mise en relation de projets Web.",
    features: [
      'Messagerie instantanée',
      'Authentification via JWT',
      'Espace personnel',
      'Ajout, modification, édition et suppression de ressources',
      'Pagination et recherche',
      'Back office',
      'Test unitaire',
    ],
    context: ' Projet de fin de formation',
    imageUrl: projetsDeDevImage,
    imagesUrl: [projetsDeDevImage, swapiImage],
  },
  {
    id: 2,
    title: 'Translation Chrome extension',
    logos: translationChromeExtension,
    description:
      'Extension google chrome permettant de traduire un mot ou une phrase sélectionné, en insérant la traduction directement dans la page.',
    features: [
      "Utilisation de l'API Google chrome extension",
      "Utilisation de l'API MyMemory pour la traduction",
      "Possibilité de choisir dans une liste la langue d'origine du texte et la langue cible",
      "Désactivation de l'extension depuis la popup",
      'Insertion de la traduction après la sélection',
    ],
    context: ' Projet personnel',
    imageUrl: chromeExtensionImage,
    imagesUrl: [projetsDeDevImage, swapiImage],
  },
  {
    id: 3,
    title: 'Cook-me',
    logos: cookMe,
    description: 'Application permettant la création et la gestion de recette de cuisine',
    features: [
      'Authentification via JWT',
      'Traduction avec react-i18n',
      'Ajout, modification, édition et suppression de ressources',
      'Pagination et recherche',
    ],
    context: ' Projet personnel',
    imageUrl: swapiImage,
    imagesUrl: [projetsDeDevImage, swapiImage],
  },
  {
    id: 4,
    title: 'Swapi dashboard',
    logos: swapiDashboard,
    description: 'Répertoire de données des personnages, planètes, véhicules et films de l’univers de Star Wars.',
    features: ["Utilisation de l'API Swapi", 'Affichage des ressources suivant la sélection', 'Liste paginable'],
    context: ' Projet personnel',
    imageUrl: swapiImage,
    imagesUrl: [projetsDeDevImage, swapiImage],
  },
]
