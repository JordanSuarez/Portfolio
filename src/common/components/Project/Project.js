import React from 'react'

import {arrayOf, string} from 'prop-types'
import {v4 as uuid} from 'uuid'
import Fade from 'react-reveal/Fade'

import {classes as classesProps} from 'common/classes'
import Card from 'common/components/Card'

const Project = ({classes, title, logos, description, context, imageUrl, features}) => (
  <div className={classes.projectContainer}>
    <Fade right cascade>
      <article className={classes.article}>
        <div className={classes.divider} />
        <h2 className={classes.title}>
          {title}
          <span className={classes.context}>{context}</span>
        </h2>
        <p>{description}</p>
        <ul>
          {features.map((feature) => (
            <li key={uuid()}>{feature}</li>
          ))}
        </ul>
        <div>
          <div className={classes.categoriesContainer}>
            <span className={classes.category}>Technologies</span>
            <div>
              {logos.map((logo) => (
                <img src={logo} alt="" className={classes.icon} key={uuid()} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Fade>
    <Fade left>
      <Card key={uuid()} imageUrl={imageUrl} />
    </Fade>
  </div>
)

Project.propTypes = {
  context: string.isRequired,
  description: string.isRequired,
  imageUrl: string.isRequired,
  logos: arrayOf(string.isRequired).isRequired,
  title: string.isRequired,
  ...classesProps,
}

export default Project
