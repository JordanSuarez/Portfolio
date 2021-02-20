import React from 'react'

import {NavLink} from 'react-router-dom'

import './styles.css'
import {classes as classesProps} from 'common/classes'
import {getAboutRoute, getHomeRoute, getProjectRoute} from 'common/routing/routesResolver'

const Navigation = ({classes}) => {
  const routes = [
    {name: 'Accueil', route: getHomeRoute()},
    {name: 'Projets', route: getProjectRoute(1)},
    {name: 'A propos', route: getAboutRoute()},
  ]

  return (
    <nav>
      <div className={classes.menuToggle} id="menuToggle">
        <input type="checkbox" className={classes.input} />
        <span className={classes.burger} />
        <span className={classes.burger} />
        <span className={classes.burger} />
        <ul className={classes.menu} id="menu">
          {routes.map(({name, route}) => (
            <li key={name}>
              <NavLink to={route} activeClassName={classes.activeLink} exact className={classes.link}>
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

Navigation.propTypes = {
  ...classesProps,
}

export default Navigation
