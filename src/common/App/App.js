import React from 'react'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {routes} from 'common/routing/routes'
import Router from 'common/routing/router'
import theme from 'common/styles/index'

import Cursor from 'common/components/Cursor'
import Navigation from 'common/components/Navigation'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Cursor />
    <Navigation/>
    <Router routes={routes} />
  </MuiThemeProvider>
)

export default App
