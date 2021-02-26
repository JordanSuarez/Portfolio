import React, {useState} from 'react'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {routes} from 'common/routing/routes'
import darkTheme from 'common/styles/darkTheme'
import lightTheme from 'common/styles/lightTheme'
import Router from 'common/routing/router'
import SwitchButton from 'common/components/SwitchButton'

const App = () => {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

  return (
    <MuiThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SwitchButton handleChange={themeToggler} checked={theme === 'light'}>
        Switch Theme
      </SwitchButton>
      <Router routes={routes} />
    </MuiThemeProvider>
  )
}

export default App
