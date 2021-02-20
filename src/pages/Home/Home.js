import React from 'react'

import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade'

import {classes as classesProps} from 'common/classes'
import {getProjectRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'
import Button from 'common/components/Button'
import Parallax from 'common/components/Parallax'

const Home = ({classes}) => {
  const description = 'Développeur web'
  const label = 'Mes Créations '

  // TODO changer la couleur des {}
  return (
    <Base>
      <Parallax>
        <Fade bottom big opposite cascade>
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
            <Link to={getProjectRoute(1)}>
              <Fade bottom>
                <Button label={label} />
              </Fade>
            </Link>
          </div>
        </Fade>
      </Parallax>
    </Base>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
