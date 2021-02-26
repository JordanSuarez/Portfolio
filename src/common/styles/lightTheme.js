import {createMuiTheme} from '@material-ui/core'

import backgroundImage from 'common/assets/images/lightBackground.jpg'
import githubLogo from 'common/assets/images/logo/github2.png'
import linkedinLogo from 'common/assets/images/logo/linkedin2.png'
import moonLogo from 'common/assets/images/logo/moon1.png'

const palette = {
  white: '#ffffff',
  light: '#011832',
  lightGrey: '#a7a2a2',
  lightBlue: '#f2f3f6',
  firstDarkBlue: '#f6f5f5',
  secondDarkBlue: '#141C88',
  mediumBlue: '#1c2886',
  red: '#af2d2d',
  lightRed: '#ce6262',
  orange: '#ee6f57',
  menu: 'rgb(216 216 216 / 90%)',
}

const font = {
  main: 'Yanone Kaffeesatz',
  title: 'Oswald',
}

const images = {
  background: backgroundImage,
  github: githubLogo,
  linkedin: linkedinLogo,
  moon: moonLogo,
}

const breakpoints = {
  values: {
    xs: 335,
    sm: 535,
    md: 960,
    lg: 1100,
    xl: 1920,
  },
}

const cursor = {
  innerSize: 10,
  outerSize: 15,
}

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  breakpoints,
  palette,
  font,
  cursor,
  images,
})
