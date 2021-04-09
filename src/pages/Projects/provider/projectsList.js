import {cookMe, projetsDeDev, sportFields, swapiDashboard, translationChromeExtension} from './logos'
// Chrome extension
import chromeExtensionImage1 from 'common/assets/images/extension/translation1.png'
import chromeExtensionImage2 from 'common/assets/images/extension/translation2.png'
import chromeExtensionImage3 from 'common/assets/images/extension/translation3.png'
import chromeExtensionImage4 from 'common/assets/images/extension/translation4.png'
// Projets de dev
import projetsDeDevImage1 from 'common/assets/images/projetsDeDev/projetsDeDev1.png'
import projetsDeDevImage2 from 'common/assets/images/projetsDeDev/projetsDeDev2.png'
import projetsDeDevImage3 from 'common/assets/images/projetsDeDev/projetsDeDev3.png'
import projetsDeDevImage4 from 'common/assets/images/projetsDeDev/projetsDeDev4.png'
import projetsDeDevImage5 from 'common/assets/images/projetsDeDev/projetsDeDev5.png'
import projetsDeDevImage6 from 'common/assets/images/projetsDeDev/projetsDeDev6.png'
import projetsDeDevImage7 from 'common/assets/images/projetsDeDev/projetsDeDev7.png'
// Swapi
import swapiImage1 from 'common/assets/images/swapi/swapi1.png'
import swapiImage2 from 'common/assets/images/swapi/swapi2.png'
// Cook me
import cookMeImage1 from 'common/assets/images/cookMe/cookMe1.png'
import cookMeImage2 from 'common/assets/images/cookMe/cookMe2.png'
import cookMeImage3 from 'common/assets/images/cookMe/cookMe3.png'
import cookMeImage4 from 'common/assets/images/cookMe/cookMe4.png'
import cookMeImage5 from 'common/assets/images/cookMe/cookMe5.png'
import cookMeImage6 from 'common/assets/images/cookMe/cookMe6.png'
// Sport Fields
import sportFieldsImage1 from 'common/assets/images/sportFields/sportFields1.png'
import sportFieldsImage2 from 'common/assets/images/sportFields/sportFields2.png'
import sportFieldsImage3 from 'common/assets/images/sportFields/sportFields3.png'
import sportFieldsImage4 from 'common/assets/images/sportFields/sportFields4.png'
import sportFieldsImage5 from 'common/assets/images/sportFields/sportFields5.png'
import sportFieldsImage6 from 'common/assets/images/sportFields/sportFields6.png'
import sportFieldsImage7 from 'common/assets/images/sportFields/sportFields7.jpeg'

export default [
  {
    id: 1,
    title: 'Sport Fields',
    logos: sportFields,
    link: 'https://sport-fields.surge.sh/',
    description:
      "Progressive Web APP (PWA) développé avec le framework Angular 11. Utilisation de la géolocalisation pour afficher des équipements sportifs selon le type, la ville ou l'adresse.",
    features: [
      'Progressive Web App',
      'Pagination et Filtre',
      "Utilisation de l'API Google map",
      "Utilisation de l'API Adresse (Gep Api Gouv) pour géocodage et le géocodage inversé",
      "Utilisation de l'API OpenDataSoft pour la liste des équipements sportifs",
    ],
    context: ' Projet personnel -',
    imagesUrl: [
      sportFieldsImage1,
      sportFieldsImage2,
      sportFieldsImage3,
      sportFieldsImage4,
      sportFieldsImage5,
      sportFieldsImage6,
      sportFieldsImage7,
    ],
  },
  {
    id: 2,
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
      'Gestion de projet inspiré de la méthodologie Scrum',
    ],
    context: ' Projet de fin de formation - Développeur Frontend',
    imagesUrl: [
      projetsDeDevImage1,
      projetsDeDevImage2,
      projetsDeDevImage3,
      projetsDeDevImage4,
      projetsDeDevImage5,
      projetsDeDevImage6,
      projetsDeDevImage7,
    ],
  },
  {
    id: 3,
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
    imagesUrl: [chromeExtensionImage1, chromeExtensionImage2, chromeExtensionImage3, chromeExtensionImage4],
  },
  {
    id: 4,
    title: 'Cook-me',
    logos: cookMe,
    description: 'Application permettant la création et la gestion de recette de cuisine',
    features: [
      'Authentification via JWT',
      "Utilisation de react-i18n pour la mise en place d'une traduction",
      'Ajout, modification, édition et suppression de ressources',
      'Pagination et recherche',
      'Gestion de projet inspiré de la méthodologie Scrum',
    ],
    context: ' Projet personnel - Développeur Fullstack',
    imagesUrl: [cookMeImage1, cookMeImage2, cookMeImage3, cookMeImage4, cookMeImage5, cookMeImage6],
  },
  {
    id: 5,
    title: 'Swapi dashboard',
    logos: swapiDashboard,
    description: 'Répertoire de données des personnages, planètes, véhicules et films de l’univers de Star Wars.',
    features: ["Utilisation de l'API Swapi", 'Affichage des ressources suivant la sélection', 'Liste paginable'],
    context: ' Projet personnel',
    imagesUrl: [swapiImage1, swapiImage2],
  },
]
