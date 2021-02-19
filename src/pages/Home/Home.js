import React from 'react'

import {Link} from 'react-router-dom'

import {classes as classesProps} from 'common/classes'
import {getWorkRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'
import Button from 'common/components/Button'

const Home = ({classes}) => {
  const description = 'Développeur web'
  const label = 'Mes Créations '

  // TODO changer la couleur des {}
  return (
    <Base>
      <div className={classes.titleWrapper}>
        <h1 className={classes.title}>
          <span className={classes.primaryLetter}>J</span>
          <span className={classes.letter}>o</span>
          <span className={classes.letter}>r</span>
          <span className={classes.letter}>d</span>
          <span className={classes.letter}>a</span>
          <span className={classes.letter}>n </span>
          <span>&nbsp;</span>
          <span className={classes.letter}>&#123;</span>
          <span className={classes.letter}>S</span>
          <span className={classes.letter}>u</span>
          <span className={classes.letter}>a</span>
          <span className={classes.letter}>r</span>
          <span className={classes.letter}>e</span>
          <span className={classes.letter}>z</span>
          <span className={classes.letter}>&#125;</span>
        </h1>
        <p className={classes.description}>{description}</p>
        <Link to={getWorkRoute()}>
          <Button label={label} />
        </Link>
      </div>
    </Base>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
