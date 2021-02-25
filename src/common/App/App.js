import React from 'react'

import {MuiThemeProvider} from '@material-ui/core/styles'

import {routes} from 'common/routing/routes'
import Cursor from 'common/components/Cursor'
import IsDevice from 'common/components/Cursor/helpers/IsDevice'
import Router from 'common/routing/router'
import theme from 'common/styles/index'

const App = () => (
  <MuiThemeProvider theme={theme}>
    {typeof navigator !== 'undefined' && IsDevice.any() ? <></> : <Cursor />}
    <Router routes={routes} />
  </MuiThemeProvider>
)

export default App
