import React from 'react'

import {v4 as uuid} from 'uuid'

import {arrayOf, string} from 'prop-types'
import Fade from 'react-reveal/Fade'

import {classes as classesProps} from 'common/classes'
import Card from 'common/components/Card'

const Project = ({classes, title, logo, description, context, imageUrl}) => (
  <div className={classes.projectContainer}>
    <Fade right cascade>
      <article className={classes.article}>
        <div className={classes.divider} />
        <h2 className={classes.title}>
          {title}
          <span className={classes.context}>{context}</span>
        </h2>
        <p>{description}</p>
        <div>
          <div className={classes.categoriesContainer}>
            <span className={classes.category}>Technologies</span>
            <div>
              {logo.map((lo) => (
                <img src={lo} alt="" className={classes.icon} key={uuid()} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Fade>
    <Fade left>
      <Card imageUrl={imageUrl} key={uuid()} />
    </Fade>
  </div>
)

Project.propTypes = {
  context: string.isRequired,
  description: string.isRequired,
  imageUrl: string.isRequired,
  logo: arrayOf(string.isRequired).isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default Project
