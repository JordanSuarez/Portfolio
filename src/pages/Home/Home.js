import React from 'react'

import {Link} from 'react-router-dom'

import {classes as classesProps} from 'common/classes'
import {getProjectRoute} from 'common/routing/routesResolver'
import Base from 'common/components/Base'
import Button from 'common/components/Button'
// import githubLogo from 'common/assets/images/logo/github.png'
// import linkedinLogo from 'common/assets/images/logo/linkedin.png'
import Parallax from 'common/components/Parallax'

const Home = ({classes}) => {
  const subtitle = '~ Développeur Web ~'
  const label = 'Mes réalisations '
  const description =
    "Après dix années d'expérience dans le bâtiment, j’ai décidé d’effectuer une reconversion professionnelle afin de débuter une nouvelle carrière." +
    " Passionné par l'informatique depuis très jeune, c'est naturellement que je me suis orienté vers le métier de développeur web"
  // const text = 'Pour me contacter, '~
  const test = (
    <div className={classes.titleWrapper}>
      <h1 className={classes.title}>
        <span className={classes.primaryLetter}>J</span>
        <span className={classes.letter}>o</span>
        <span className={classes.letter}>r</span>
        <span className={classes.letter}>d</span>
        <span className={classes.letter}>a</span>
        <span className={classes.letter}>n </span>
        <span>&nbsp;</span>
        <span className={classes.bracket}>&#123;</span>
        <span className={classes.letter}>S</span>
        <span className={classes.letter}>u</span>
        <span className={classes.letter}>a</span>
        <span className={classes.letter}>r</span>
        <span className={classes.letter}>e</span>
        <span className={classes.letter}>z</span>
        <span className={classes.bracket}>&#125;</span>
      </h1>
    </div>
  )

  const test2 = (
    <Link to={getProjectRoute()}>
      <Button label={label} />
    </Link>
  )

  const test3 = (
    <p className={classes.subtitle}>
      {subtitle}
      <br />
      Front-end
    </p>
  )

  const test4 = <p className={classes.description}>&#8220; {description} &#8221;</p>
  // const githubUrl = 'https://github.com/JordanSuarez'
  // const linkedinUrl = 'https://www.linkedin.com/in/jordan-suarez/'

  // const githubLink = (
  //   <a href={githubUrl} rel="noreferrer" target="_blank">
  //     Mon github <img src={githubLogo} alt="repository github" />{' '}
  //   </a>
  // )
  //
  // const linkedin = (
  //   <a href={linkedinUrl} rel="noreferrer" target="_blank">
  //     Mon github <img src={linkedinLogo} alt="repository github" />{' '}
  //   </a>
  // )

  // const test5 = <p className={classes.description}>{description}</p>

  return (
    <Base>
      <Parallax firstChildren={test} secondChildren={test2} thirdChildren={test3} fourthChildren={test4} />
    </Base>
  )
}

Home.propTypes = {
  ...classesProps,
}

export default Home
