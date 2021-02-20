import React from 'react'

import Fade from 'react-reveal/Fade'

import {classes as classesProps} from 'common/classes'
import Card from 'common/components/Card'

//TODO add props validation
const Project = ({classes, title, logo, description, context, imageUrl}) => (
  <div className={classes.projectContainer}>
    <Fade right cascade>
      <article className={classes.article}>
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
                <img src={lo} alt="" className={classes.icon} />
              ))}
            </div>
          </div>
        </div>
      </article>
    </Fade>
    <Fade left>
      <Card imageUrl={imageUrl} />
    </Fade>
  </div>
)

Project.propTypes = {
  //TODO add props validation
  ...classesProps,
}

export default Project
