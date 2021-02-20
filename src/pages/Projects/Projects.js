import React from 'react'

import Jump from 'react-reveal/Jump'

import {classes as classesProps} from 'common/classes'
import Base from 'common/components/Base'
import Project from 'common/components/Project'
import projectsList from './helper/projectsList'

const Projects = ({classes}) => (
  <Base classes={classes.root}>
    <Jump>
      <h1 className={classes.title}>
        <span>M</span>es Créations
      </h1>
    </Jump>
    <div className={classes.wrapper}>
      {projectsList.map((project) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Project {...project} key={project.id} />
      ))}
    </div>
  </Base>
)

Projects.propTypes = {
  ...classesProps,
}

export default Projects
