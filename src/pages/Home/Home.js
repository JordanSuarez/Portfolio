import React from 'react'

import {Link} from 'react-router-dom'
import {useTheme} from '@material-ui/core/styles'
import {v4 as uuid} from 'uuid'

import {classes as classesProps} from 'common/classes'
import {getProjectRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'
import Button from 'common/components/Button'
import Parallax from 'common/components/Parallax'

const Home = ({classes}) => {
  const {images} = useTheme()

  const githubUrl = process.env.REACT_APP_GITHUB
  const linkedinUrl = process.env.REACT_APP_LINKEDIN

  const subtitle = '- Développeur Web Front End -'
  const label = 'Mes réalisations'
  const title = 'Jordan {Suarez}'

  const titleSplit = title.split('').map((letter, index) => {
    if (index === 0) {
      return (
        <span key={uuid()} className={classes.primaryLetter}>
          {letter}
        </span>
      )
    }
    if (letter === ' ') {
      return (
        <span key={uuid()} className={classes.letter}>
          &nbsp;
        </span>
      )
    }
    if (letter === '{' || letter === '}') {
      return (
        <span key={uuid()} className={`${classes.letter} ${classes.bracket}`}>
          {letter}
        </span>
      )
    }

    return (
      <span key={uuid()} className={classes.letter}>
        {letter}
      </span>
    )
  })

  const children = {
    title: (
      <div className={classes.titleWrapper}>
        <h1 className={classes.title}>{titleSplit}</h1>
      </div>
    ),
    subtitle: <p className={classes.subtitle}>{subtitle}</p>,
    linkedinLink: (
      <a href={linkedinUrl} rel="noreferrer" target="_blank" className={classes.link}>
        <img src={images.linkedinHome} alt="repository github" />
      </a>
    ),
    githubLink: (
      <a href={githubUrl} rel="noreferrer" target="_blank" className={classes.link}>
        <img src={images.githubHome} alt="repository github" />
      </a>
    ),
    moon: <img src={images.moon} alt="repository github" />,
  }

  return (
    <Base>
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
