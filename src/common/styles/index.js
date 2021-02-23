import {createMuiTheme} from '@material-ui/core'

const palette = {
  white: '#ffffff',
  light: '#f6f5f5',
  // firstDarkBlue: '#00334e',
  firstDarkBlue: '#011832',
  secondDarkBlue: '#141C88',
  mediumBlue: '#145374',
  red: '#af2d2d',
  lightRed: '#ce6262',
  orange: '#ee6f57',
}

const font = {
  main: 'Yanone Kaffeesatz',
  title: 'Oswald',
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
})
