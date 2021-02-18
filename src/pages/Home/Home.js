import React from 'react'

import {classes as classesProps} from 'common/classes'
import Watcher from 'common/components/Watcher'

const Home = ({classes}) => {
  const description = 'Développeur Web'

  return (
    <Watcher>
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
    </Watcher>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
