import React from 'react'

import {NavLink} from 'react-router-dom'

import {classes as classesProps} from 'common/classes'
import {getContactRoute, getHomeRoute, getProjectRoute} from 'common/routing/routesResolver'
import cvPdf from 'common/assets/CV.pdf'

const Navigation = ({classes}) => {
  const routes = [
    {name: 'Accueil', route: getHomeRoute()},
    {name: 'Réalisations', route: getProjectRoute(1)},
    {name: 'Contact', route: getContactRoute()},
    {name: 'Mon CV', route: cvPdf},
  ]

  return (
    <nav>
      <div className={classes.menuToggle}>
        <input type="checkbox" className={classes.input} />
        <span className={classes.burger} />
        <span className={classes.burger} />
        <span className={classes.burger} />
        <ul className={classes.menu}>
          {routes.map(({name, route}) => (
            <li key={name}>
              {name === 'Mon CV' ? (
                <a href={route} target="_blank" rel="noreferrer">
                  {name}
                </a>
              ) : (
                <NavLink to={route} activeClassName={classes.activeLink} exact className={classes.link}>
                  {name}
                </NavLink>
              )}
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
