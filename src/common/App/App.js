import React from 'react'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {routes} from 'common/routing/routes'
import Cursor from 'common/components/Cursor'
import Router from 'common/routing/router'
import theme from 'common/styles/index'

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Cursor />
    <Router routes={routes} />
  </MuiThemeProvider>
)

export default App
