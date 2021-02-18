import React from 'react'

import {CSSTransition} from 'react-transition-group'
import {matchPath} from 'react-router'

import {classes as classesProps} from 'common/classes'
import {getHomeRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'

const Home = ({classes}) => {
  const description = 'Développeur Web'

  const match = matchPath(getHomeRoute(), {
    path: getHomeRoute(),
    exact: true,
    strict: false,
  })

  console.log(match)

  return (
    <Base>
      <CSSTransition in={match != null} timeout={1000} classNames="page" unmountOnExit>
        <div className={classes.titleWrapper}>
          <h1 className={classes.title}>
            <span className={classes.primaryLetter}>J</span>
            <span className={classes.letter}>o</span>
            <span className={classes.letter}>r</span>
            <span className={classes.letter}>d</span>
            <span className={classes.letter}>a</span>
            <span className={classes.letter}>n </span>
            <span>&nbsp;</span>
            <span className={classes.letter}>S</span>
            <span className={classes.letter}>u</span>
            <span className={classes.letter}>a</span>
            <span className={classes.letter}>r</span>
            <span className={classes.letter}>e</span>
            <span className={classes.letter}>z</span>
          </h1>
          <p className={classes.description}>{description}</p>
        </div>
      </CSSTransition>
    </Base>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
