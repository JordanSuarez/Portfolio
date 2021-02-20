import React from 'react'

import Jump from 'react-reveal/Jump'

import {classes as classesProps} from 'common/classes'
import Base from 'common/components/Base'
import docker from 'common/assets/images/docker.png'
import mysql from 'common/assets/images/mysql.png'
import nginx from 'common/assets/images/nginx.png'
import nodejs from 'common/assets/images/nodejs.png'
import Project from 'common/components/Project'
import react from 'common/assets/images/react.png'
import redux from 'common/assets/images/redux.png'
import symfony from 'common/assets/images/symfony.png'

const Projects = ({classes}) => {
  const projects = [
    {
      id: 1,
      title: 'Projets de dev',
      logo: [react, redux, symfony, docker, mysql, nodejs, nginx],
      description:
        "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
      context: ' Projet de fin de formation',
    },
    {
      id: 2,
      title: 'Translation Chrome extension',
      logo: [react, redux, symfony, docker, mysql, nodejs, nginx],
      description:
        "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
      context: ' Projet de fin de formation',
    },
    {
      id: 3,
      title: 'Cook-me',
      logo: [react, redux, symfony, docker, mysql, nodejs, nginx],
      description:
        "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
      context: ' Projet de fin de formation',
    },
    {
      id: 4,
      title: 'Swapi dashboard',
      logo: [react, redux, symfony, docker, mysql, nodejs, nginx],
      description:
        "Plateforme collaborative permettant l'hébergement et le partage de projet de développeurs. Développé entièrement en Javascript, c'est un projet réalisé en équipe en fin de formation",
      context: ' Projet de fin de formation',
    },
  ]

  return (
    <Base classes={classes.root}>
      <Jump>
        <h1 className={classes.title}>
          <span>M</span>es Créations
        </h1>
      </Jump>
      <div className={classes.wrapper}>
        {projects.map((project) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <Project {...project} key={project.id} />
        ))}
      </div>
    </Base>
  )
}

Projects.propTypes = {
  ...classesProps,
}

export default Projects
