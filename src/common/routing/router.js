import React from 'react'

import {arrayOf, shape, string} from 'prop-types'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from 'pages/Home'

const Router = ({routes}) => (
  <BrowserRouter>
    <Switch>
      {routes.map(({exact = true, path, component, id}) => (
        <Route key={id} exact={exact} path={path} component={component} />
      ))}
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
)

Router.propTypes = {
  routes: arrayOf(
    shape({
      id: string.isRequired,
      path: string.isRequired,
    }),
  ),
}

Router.defaultProps = {
  routes: [],
}

export default Router
