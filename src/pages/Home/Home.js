import React from 'react'

import {Link} from 'react-router-dom'

import {classes as classesProps} from 'common/classes'
import {getProjectRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'
import Button from 'common/components/Button'
import githubLogo from 'common/assets/images/logo/github1.png'
import linkedinLogo from 'common/assets/images/logo/linkedin1.png'
import moonLogo from 'common/assets/images/logo/moon.png'
import Parallax from 'common/components/Parallax'

const Home = ({classes}) => {
  const githubUrl = process.env.REACT_APP_GITHUB
  const linkedinUrl = process.env.REACT_APP_LINKEDIN

  const subtitle = '- Développeur Web Front End -'
  const label = 'Mes réalisations'

  const children = {
    title: (
      <div className={classes.titleWrapper}>
        <h1 className={classes.title}>
          <span className={classes.primaryLetter}>J</span>
          <span className={classes.letter}>o</span>
          <span className={classes.letter}>r</span>
          <span className={classes.letter}>d</span>
          <span className={classes.letter}>a</span>
          <span className={classes.letter}>n </span>
          <span>&nbsp;</span>
          <span className={`${classes.letter} ${classes.bracket}`}>&#123;</span>
          <span className={classes.letter}>S</span>
          <span className={classes.letter}>u</span>
          <span className={classes.letter}>a</span>
          <span className={classes.letter}>r</span>
          <span className={classes.letter}>e</span>
          <span className={classes.letter}>z</span>
          <span className={`${classes.letter} ${classes.bracket}`}>&#125;</span>
        </h1>
      </div>
    ),
    subtitle: <p className={classes.subtitle}>{subtitle}</p>,
    linkedinLink: (
      <a href={linkedinUrl} rel="noreferrer" target="_blank" className={classes.link}>
        <img src={linkedinLogo} alt="repository github" />
      </a>
    ),
    githubLink: (
      <a href={githubUrl} rel="noreferrer" target="_blank" className={classes.link}>
        <img src={githubLogo} alt="repository github" />
      </a>
    ),
    moon: <img src={moonLogo} alt="repository github" />,
  }

  return (
    <Base className={classes.root}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Parallax {...children} />
      <div className={classes.redirection}>
        <Link to={getProjectRoute()}>
          <Button label={label} type="button" />
        </Link>
      </div>
    </Base>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
