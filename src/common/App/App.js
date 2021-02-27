import React, {useState} from 'react'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {routes} from 'common/routing/routes'
import darkTheme from 'common/styles/darkTheme'
import lightTheme from 'common/styles/lightTheme'
import Router from 'common/routing/router'
import SwitchButton from 'common/components/SwitchButton'

const App = () => {
  const dark = 'dark'
  const light = 'light'
  const theme = 'theme'

  const getLocalStorage = () => localStorage.getItem(theme)
  const [currentTheme, setCurrentTheme] = useState(getLocalStorage || light)

  const saveLocalStorage = (themeColor) => {
    setCurrentTheme(themeColor)
    localStorage.setItem(theme, themeColor)
  }
  const themeToggler = () => (currentTheme === light ? saveLocalStorage(dark) : saveLocalStorage(light))

  return (
    <MuiThemeProvider theme={currentTheme === light ? lightTheme : darkTheme}>
      <SwitchButton handleChange={themeToggler} checked={currentTheme === light}>
        Switch Theme
      </SwitchButton>
      <Router routes={routes} />
    </MuiThemeProvider>
  )
}

export default App
