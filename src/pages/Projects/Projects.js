import React from 'react'

import {classes as classesProps} from 'common/classes'
import Page from 'common/components/Page'
import Project from 'common/components/Project'
import projectsList from './helper/projectsList'

const Projects = () => (
  <Page title="Réalisations">
    {projectsList.map((project) => (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Project {...project} key={project.id} />
    ))}
  </Page>
)

Projects.propTypes = {
  ...classesProps,
}

export default Projects
