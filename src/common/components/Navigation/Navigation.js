import React from 'react'

import {Link} from 'react-router-dom'

import {classes as classesProps} from 'common/classes'
import {getAboutRoute, getHomeRoute, getWorkRoute} from '../../routing/routesResolver'

const Navigation = ({classes}) => {
  const routes = [
    {name: 'Accueil', route: getHomeRoute()},
    {name: 'A propos', route: getAboutRoute()},
    {name: 'Projets', route: getWorkRoute()},
  ]

  return (
    <nav className={classes.menuToggle}>
      <input type="checkbox" className={classes.input} />
      <span className={classes.burger} />
      <span className={classes.burger} />
      <span className={classes.burger} />
      <ul className={classes.menu}>
        {routes.map(({name, route}) => (
          <li>
            <Link to={route} activeClassName={classes.activeLink} exact className={classes.link}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  ...classesProps,
}

export default Navigation
